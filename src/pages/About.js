import React from 'react'
import { Container, Jumbotron, Image } from 'react-bootstrap'


import '../style/style.css'

const About = () => {
  return (
    <>
      <Container fluid='true' className='about'>
      
        <Jumbotron>
          <h2>Jack Novotny</h2>
          <br></br>
          <Image src={require('../images/profile.jpg')} />
          <br></br>
          <br></br>
          <ul>
            <li>I graduated from the University of Tennessee</li>
            <li>
              I currently reside in Nashville, Tennessee. Aside from web development I enjoy spending movies, sports, and playing Catan.
              
            </li>
          </ul>

          
        
        </Jumbotron>
      </Container>
    </>
  )
}

export default About

