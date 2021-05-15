import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

export default function SearchResult(props) {
  console.log(props.match.params.searchTerm)

  const [AllProducts, setAllProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  // const [Term, setTerm] = useState('')

  useEffect(() => {
    console.log('search mounted')
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setAllProducts(response.data)
    })
    // .then(console.log(AllProducts))
  }, [])

  // useEffect(() => {
  //   console.log('search results changed')

  //   let tempSearchResults = AllProducts.filter((o) =>
  //     o.title.toLowerCase().includes(Term.toLowerCase())
  //   )
  //   setSearchResults({ tempSearchResults })
  //   console.log(searchResults)
  // }, [searchResults])

  return (
    <div
      className='container'
      style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2%' }}
    >
      {/* {searchResults.title} */}
    </div>
  )
}
