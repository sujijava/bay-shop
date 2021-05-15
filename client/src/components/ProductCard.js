import React from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

const ProductCard = (product) => {
  console.log(product.product)

  const addToCart = (product) => {
    console.log(`${product.title} is added`)
    console.log(product)
    axios.post('/lists/', product).then((res) => console.log(res.data))
  }

  return (
    <div class='col-md-4 mb-3'>
      <div className='card h-100'>
        <div className='labels d-flex justify-content-between position-absolute w-100'>
          <div className='label-new'></div>
          <div className='label-sale'>
            <span className='text-white bg-primary small d-flex align-items-center px-2 py-1'>
              <i className='fa fa-tag' aria-hidden='true'></i>
              <span className='ml-1'>Sale</span>
            </span>
          </div>
        </div>
        <a
          href={`product/${product.product.id}`}
          style={{ justifyContent: 'center', display: 'flex' }}
        >
          <img
            style={{ width: '100px', height: '100px', marginTop: '10%' }}
            src={product.product.image}
            className='card-img-top'
            alt='Product'
          />
        </a>
        <div className='card-body px-2 pb-2 pt-1 d-flex flex-column'>
          <div className='d-flex justify-content-between'>
            <div>
              <p className='h4 text-primary'>${product.product.price}</p>
            </div>
            <div>
              <a
                href='#'
                className='text-secondary lead'
                data-toggle='tooltip'
                data-placement='left'
                title=''
                data-original-title='Compare'
              >
                <i className='fa fa-line-chart' aria-hidden='true'></i>
              </a>
            </div>
          </div>
          <p className='text-warning d-flex align-items-center mb-2'>
            <i className='fa fa-star' aria-hidden='true'></i>
            <i className='fa fa-star' aria-hidden='true'></i>
            <i className='fa fa-star' aria-hidden='true'></i>
            <i className='fa fa-star' aria-hidden='true'></i>
            <i className='fa fa-star' aria-hidden='true'></i>
          </p>
          <p className='mb-0'>
            <strong>
              <a href='#' className='text-secondary'>
                {product.product.title}
              </a>
            </strong>
          </p>
          <p />
          <div className='d-flex justify-content-between mt-auto'>
            <div className='col px-0'>
              <button
                className='btn btn-outline-primary btn-block'
                onClick={() => addToCart(product.product)}
              >
                Add To Cart
                <i className='fa fa-shopping-basket' aria-hidden='true'></i>
              </button>
            </div>
            <div className='ml-2'>
              <a
                href='#'
                className='btn btn-outline-success'
                data-toggle='tooltip'
                data-placement='left'
                title=''
                data-original-title='Add to Wishlist'
              >
                <i className='fa fa-heart' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
