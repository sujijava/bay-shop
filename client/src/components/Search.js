import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Alert } from 'react-bootstrap'

const Search = () => {
  const [Term, setTerm] = useState('')
  const [AllProducts, setAllProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    console.log('search results changed')
    console.log(searchResults)
  }, [searchResults])

  useEffect(() => {
    console.log('search mounted')
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setAllProducts(response.data)
    })
  }, [])

  const performSearch = async () => {
    console.log('search clicked')
    console.log(Term)
    console.log(AllProducts)
    let tempSearchResults = AllProducts.filter((o) =>
      o.title.toLowerCase().includes(Term.toLowerCase())
    )
    setSearchResults(tempSearchResults)
  }

  const renderedResults = searchResults.map((product) => {
    return <ProductCard key={product.id} product={product}></ProductCard>
  })

  // searchResults.map((product) => {
  //   return <ProductCard key={product.id} product={product}></ProductCard>
  // })

  const noResults = (
    <Alert
      style={{ display: 'flex', justifyContent: 'center' }}
      className='w-100'
      variant='light'
    >
      <p>
        Dear Customer: <br />
        Please start search
      </p>
    </Alert>
  )

  return (
    <div class='search_container '>
      <div class='input-group header_search_container row'>
        <div class='form-outline'>
          <input
            type='search'
            id='form1'
            class='form-control'
            value={Term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => performSearch()}
          type='button'
          class='btn btn-primary'
        >
          <i class='fas fa-search'></i>
        </button>
      </div>

      <div>{searchResults.length != 0 ? renderedResults : ''}</div>
    </div>
  )
}

export default Search
