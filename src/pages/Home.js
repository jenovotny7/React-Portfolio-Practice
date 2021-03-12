import React from 'react'
import { Jumbotron, Container, Image } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import profilePic from '../images/profile3.jpeg'

const Home = () => {
  return (
    <>
      <Jumbotron>
        <h2>Hello World, I'm Jack Novotny!</h2>
        <p>
          Full Stack Web Developer
        </p>
        <Image src={profilePic} />
      </Jumbotron>
      <Container className='container'>
        <SocialIcon
          url='http://linkedin.com/jacknovotny'
          target='_blank'
        />
        <SocialIcon url='https://github.com/jenovotny7' target='_blank' />
      </Container>

    </>
  )
}

export default Home


