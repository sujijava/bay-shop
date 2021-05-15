import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
  return (
    // <div>
    //   <div className='row head_logo_container'>
    //     <a href='/'>
    //       <img className='logo_image' src='/assets/images/logo.png'></img>
    //     </a>
    //   </div>
    //   <nav
    //     className='navbar navbar-expand-md navbar-light bg-light'
    //     style={{ marginBottom: '6%' }}
    //   >
    //     <div className='collapse navbar-collapse' id='navbarNav'>
    //       <ul className='navbar-nav mr-auto'>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/'>
    //             All
    //           </a>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/electronics'>
    //             Electronics
    //           </a>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/jewelery'>
    //             Jewelery
    //           </a>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/men_clothing'>
    //             Men
    //           </a>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/women_clothing'>
    //             Women
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className='navbar-nav'>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/search'>
    //             Search
    //           </a>
    //         </li>
    //         <li className='nav-item dropdown show'>
    //           <a
    //             className='nav-link dropdown-toggle'
    //             data-toggle='dropdown'
    //             href='/my_account'
    //             role='button'
    //             aria-haspopup='true'
    //             aria-expanded='true'
    //           >
    //             My Account
    //           </a>
    //           <div className='dropdown-menu show'>
    //             <a className='dropdown-item' href='/sign_in'>
    //               Sign In
    //             </a>
    //             <a className='dropdown-item' href='/sign_up'>
    //               Sign Up
    //             </a>
    //           </div>
    //         </li>
    //         <li className='nav-item'>
    //           <a className='nav-link' href='/cart'>
    //             Cart
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='/'>Bay Shop</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/electronics'>Electronics</Nav.Link>
        <Nav.Link href='/jewelery'>Jewelery</Nav.Link>
        <Nav.Link href='/men_clothing'>Men</Nav.Link>
        <Nav.Link href='/women_clothing'>Women</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
