import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const { currentUser } = useAuth()

  const loggedOut = (
    <>
      <NavDropdown.Item href='/login'>Log In</NavDropdown.Item>
      <NavDropdown.Item href='/signup'>Sign up</NavDropdown.Item>
    </>
  )

  const signedIn = (
    <>
      <NavDropdown.Item href='/logout' onClick={() => logOutHandler()}>
        Log out
      </NavDropdown.Item>
    </>
  )

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
          <Nav.Link variant='success' href='/custom'>
            <span style={{ color: '#81b214' }}>
              <i class='fas fa-award'></i>Custom
            </span>
          </Nav.Link>
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
            title={
              currentUser
                ? `Welcome, ${currentUser.email}`
                : `Welcome to our shop`
            }
            id='navbarScrollingDropdown'
          >
            {currentUser ? signedIn : loggedOut}
            <NavDropdown.Divider />
            <NavDropdown.Item href='/admin/login'>
              Admin Sign In
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
