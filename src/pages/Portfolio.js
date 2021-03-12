import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

import '../style/style.css';

const Portfolio = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>My Portfolio</h2>
        <Row>
          <ProjectCard
            imageCardPath={require('../images/projects/Quiz.png')}
            cardTitle='Quiz'
            sourceCode='https://jenovotny7.github.io/Quiz-API/'
          />

          <ProjectCard
            imageCardPath={require('../images/projects/weather.png')}
            cardTitle='Weather App'
            sourceCode='jenovotny7.github.io/weatherapp/'
          />
          <ProjectCard
            imageCardPath={require('../images/projects/Street.png')}
            cardTitle='Street Live'
            sourceCode=' https://jenovotny7.github.io/Project-X/'
          />
          
        </Row>
        
      </Container>
    </>
  );
};

export default Portfolio;


