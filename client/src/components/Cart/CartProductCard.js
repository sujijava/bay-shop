import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function CartProductCard({ eachProduct }) {
  let history = useHistory()

  const deleteProduct = (product) => {
    console.log(product.Title)

    axios.delete('http://localhost:5000/server/cart/' + product._id)

    history.go(0)
  }

  return (
    <div class='d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded'>
      <div class='mr-1'>
        <img class='rounded' src={eachProduct.Image} width='70' />
      </div>
      <div
        class='d-flex flex-column align-items-center product-details'
        style={{ maxWidth: '30%' }}
      >
        <span class='font-weight-bold'>{eachProduct.Title}</span>
        <div class='d-flex flex-row product-desc'></div>
      </div>
      <div>
        <h5 class='text-grey'>${eachProduct.Price}</h5>
      </div>
      <div>
        <h5 class='text-grey'>Qty: {eachProduct.Qty}</h5>
      </div>
      <div class='d-flex align-items-center'>
        <Button variant='light' onClick={() => deleteProduct(eachProduct)}>
          <i class='fa fa-trash mb-1 text-danger'></i>
        </Button>
      </div>
    </div>
  )
}
