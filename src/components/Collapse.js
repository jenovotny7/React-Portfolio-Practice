import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function Collapse(props) {
  return (
    <div>
      <Button
        color={props.buttonColor}
        id={props.toggleID}
        style={{ marginBottom: '2rem' }}
      >
        {props.school}
      </Button>
      <UncontrolledCollapse toggler={props.toggleID}>
        <Card>
          <CardBody>
            <p>{props.specialty}</p>
            <p>{props.location}</p>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default Collapse;
