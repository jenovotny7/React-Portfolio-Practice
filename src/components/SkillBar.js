import React from 'react';
import { Badge } from 'react-bootstrap';

function SkillBar(props) {
  return (
    <div>
      <div className='badgeContainer'>
        <h3>
          <Badge variant={props.badgeColor}>{props.skillName}</Badge>
          
        </h3>
      </div>
    </div>
  );
}

export default SkillBar;
