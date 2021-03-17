import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Link } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
