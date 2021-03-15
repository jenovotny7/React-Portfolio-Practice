import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Collapse from '../components/Collapse';
import SkillBar from '../components/SkillBar';

import '../style/style.css';

const Resume = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Education</h2>
        <Collapse
          buttonColor='dark'
          toggleID='one'
          school='University of Tennessee'
          specialty='Bachelors of Science - 2015'
          location='Knoxville, Tennessee'
        />
    
        
      </Container>

      <Container fluid='true' className='container'>
        <h2>Work History</h2>
        <Collapse
          buttonColor='primary'
          toggleID='two'
          school='Carvana'
          specialty='Logistics'
          location='Nashville, Tennessee, USA'
        />
        <Collapse
          buttonColor='primary'
          toggleID='three'
          school='Dell'
          specialty='Sales'
          location='Nashville, TN USA'
        />
         <Collapse
          buttonColor='success'
          toggleID='four'
          school='Amazon'
          specialty='Logistics'
          location='Phoenix, AZ'
        />
        
      </Container>

      <Container fluid='true' className='container'>
        <h2>Skills</h2>
        <Row className='badgeRow'>
          <SkillBar
            badgeColor='primary'
            skillName='HTML'
            
          />
          <SkillBar
            badgeColor='success'
            skillName='CSS'
           
          />
          <SkillBar
            badgeColor='danger'
            skillName='JavaScript'
            
          />
          <SkillBar
            badgeColor='warning'
            skillName='React'
           
          />
          <SkillBar
            badgeColor='info'
            skillName='Node'
           
          />
          <SkillBar
            badgeColor='primary'
            skillName='Git'
           
          />
          
        </Row>
      </Container>
<Container>
<h2>Resume</h2>
      <div className="d-flex justify-content-left mb-5 ">
        <div className="skew resume-link text-center">
          <a href="./resume.pdf" download>
            <p className="anti-skew resume-link-text">
              My Resume <i className="fas fa-file-download"></i>
            </p>
          </a>
        </div>
      </div>
      </Container>

      

  
    </>
  );
};

export default Resume;

