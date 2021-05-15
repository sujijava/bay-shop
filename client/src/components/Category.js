import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

export default function Category(props) {
  const url = `https://fakestoreapi.com/products/${props.category}`
  const [result, setResult] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setResult(response.data)
      // axios returns API response body in .data
    })
    console.log(result)
  }, []) // second param [] is a list of dependency to watch and run useEffect

  const renderedResults = result.map((product) => {
    return <ProductCard key={product.id} product={product}></ProductCard>
  })

  return (
    <div
      className='container'
      style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2%' }}
    >
      {renderedResults}
    </div>
  )
}
