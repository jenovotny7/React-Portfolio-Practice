import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jack Novotny</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/about" render={() => <AboutPage/>} />
          <Route path="/resume" render={() => <Resume />} />
          <Route path="/portfolio" render={() => <Portfolio />} />
          <Route path="/contact" render={() => <ContactPage/>} />
          
          
          

        </Container>
      </Router>
    );
  }
}

export default App;