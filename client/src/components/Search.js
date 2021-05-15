import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Alert } from 'react-bootstrap'
import { Form, FormControl, Button, Row, Container, Col } from 'react-bootstrap'

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
    <>
      <Row>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '7%',
          }}
        >
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              value={Term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <Button variant='outline-success' onClick={() => performSearch()}>
              Search <i class='fas fa-search'></i>
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: '7%' }}>
          <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
            {searchResults.length != 0 ? renderedResults : ''}
          </Container>
        </Col>
      </Row>
    </>
  )
}

export default Search
