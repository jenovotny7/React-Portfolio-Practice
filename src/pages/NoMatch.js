import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import '../style/style.css';

const NoMatch = () => {
  return (
    <>
      <Container fluid='true' className='container'>
        <h2>Page Not Found?</h2>
        <p>
         No match!
        </p>
      </Container>
      <Breadcrumb className='crumb'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Page Not Found</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default NoMatch;
