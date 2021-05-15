import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ProductDetail = (props) => {
  // console.log(props.match.params.productId)

  const [Product, setProduct] = useState({})

  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get(`https://fakestoreapi.com/products/${props.match.params.productId}`)
      .then((response) => {
        setProduct(response.data)
        // console.log(response.data)
        console.log(Product)
      })
  }, Product)

  return (
    <div className='container'>
      <div className='card'>
        <div className='container-fliud'>
          <div className='wrapper row product_detail_container'>
            <div className='preview col-md-6'>
              <div className='preview-pic tab-content'>
                <div className='tab-pane active' id='pic-1'>
                  <img src={Product.image} style={{ width: '400px' }} />
                </div>
              </div>
            </div>
            <div className='details col-md-6'>
              <h3 className='product-title'>{Product.title}</h3>
              <div className='rating'>
                <div className='stars'>
                  <span className='fa fa-star checked'></span>
                  <span className='fa fa-star checked'></span>
                  <span className='fa fa-star checked'></span>
                  <span className='fa fa-star'></span>
                  <span className='fa fa-star'></span>
                </div>
              </div>
              <br></br>
              <p className='product-description'>{Product.description}</p>
              <h4 className='price'>
                current price: <span>$ {Product.price}</span>
              </h4>
              <div className='action'>
                <br></br>
                <button
                  className='add-to-cart btn btn-outline-secondary'
                  type='button'
                >
                  <i className='fa fa-shopping-basket' aria-hidden='true'></i>
                  ⠀add to cart
                </button>
                <button className='like btn btn-default' type='button'>
                  <span className='fa fa-heart'></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
