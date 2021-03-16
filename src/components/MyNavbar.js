import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>
              <i className='material-icons md-18'>home</i>
            </Nav.Link>

            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/resume'>Resume</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
