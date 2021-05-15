import React, { Component } from 'react'
import axios from 'axios'
import CartProductCard from './CartProductCard'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = { myList: [], myTotal: 0 }
  }

  deleteMyList = (product) => {
    console.log('will be delete' + product._id)
    axios.delete('http://localhost:5000/server/cart' + product._id)
    const newList = this.state.myList.filter(
      (product) => product._id !== product._id
    )
    this.setState({ myList: newList })
    let tempTotal = this.state.myList.reduce(function (prev, cur) {
      return prev + cur.Price
    }, 0)
    console.log(tempTotal)
    this.setState({ myTotal: tempTotal.toFixed(2) })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/server/cart').then((response) => {
      this.setState({ myList: response.data })
      console.log(response.data)
      let tempTotal = this.state.myList.reduce(function (prev, cur) {
        return prev + cur.Price
      }, 0)
      console.log(tempTotal)
      this.setState({ myTotal: tempTotal.toFixed(2) })
    })
  }

  render() {
    const productList = this.state.myList.map((eachProduct) => {
      return <CartProductCard eachProduct={eachProduct}></CartProductCard>
    })

    return (
      <div class='container mt-5 mb-5'>
        <div class='d-flex justify-content-center row'>
          <div class='col-md-8'>
            <div class='p-2'>
              <h4>Shopping cart</h4>
              <p>Thank you for shopping with us! </p>
            </div>
            {productList}
            <div class='d-flex flex-row justify-content-end mt-3 p-2 bg-white rounded'>
              <div>
                <p>Total: {this.state.myTotal}</p>
              </div>
              {/* <input
                type='text'
                class='form-control border-0 gift-card'
                placeholder='discount code/gift card'
              />
              <button class='btn btn-primary btn-sm ml-2' type='button'>
                Apply
              </button> */}
            </div>
            <div class='d-flex flex-row align-items-center mt-3 p-2 bg-white rounded'>
              <button
                class='btn btn-outline-secondary btn-block btn-lg ml-2 pay-button'
                type='button'
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
