import React from 'react'

export default function CartProductCard({ eachProduct }) {
  const deleteMyList = () => {
    console.log('delete clicked')
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
        <div class='d-flex flex-row product-desc'>
          {/* <div class='size mr-1'>
          <span class='text-grey'>Size:</span>
          <span class='font-weight-bold'>&nbsp;M</span>
        </div>
        <div class='color'>
          <span class='text-grey'>Color:</span>
          <span class='font-weight-bold'>&nbsp;Grey</span>
        </div> */}
        </div>
      </div>
      {/* <div class='d-flex flex-row align-items-center qty'>
      <i class='fa fa-minus text-danger'></i>
      <h5 class='text-grey mt-1 mr-1 ml-1'>2</h5>
      <i class='fa fa-plus text-success'></i>
    </div> */}
      <div>
        <h5 class='text-grey'>{eachProduct.Price}</h5>
      </div>
      <div class='d-flex align-items-center'>
        <a onClick={() => deleteMyList(eachProduct)}>
          <i class='fa fa-trash mb-1 text-danger'></i>
        </a>
      </div>
    </div>
  )
}
