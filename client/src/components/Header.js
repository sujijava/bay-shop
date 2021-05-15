import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg' style={{ zIndex: '100' }}>
      <Navbar.Brand href='/'>Bay Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav
          className='mr-auto my-2 my-lg-0'
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href='/electronics'>Electronics</Nav.Link>
          <Nav.Link href='/jewelery'>Jewelery</Nav.Link>
          <Nav.Link href='/men_clothing'>Men</Nav.Link>
          <Nav.Link href='/women_clothing'>Women</Nav.Link>

          {/* <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-primary'>Search</Button>
          </Form> */}
        </Nav>

        <Nav className='ml-auto'>
          <Nav.Link href='/search'>
            Search<i class='fas fa-search'></i>
          </Nav.Link>
          <Nav.Link href='/cart'>
            Shopping Cart
            <i
              style={{ fontSize: '15px', color: 'black' }}
              class='fas fa-shopping-cart'
            ></i>
          </Nav.Link>
          <NavDropdown
            // title={
            //   currentUser
            //     ? `Welcome, ${currentUser.email}`
            //     : `Welcome to contact.com`
            // }
            title='My Account'
            id='navbarScrollingDropdown'
          >
            <NavDropdown.Item href='/sign_up'>Sign Up</NavDropdown.Item>
            <NavDropdown.Item href='/sign_in'>Sign In</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action5'>Admin Sign In</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
