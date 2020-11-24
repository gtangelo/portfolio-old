import React from 'react';
import { Container } from 'react-bootstrap';
import routes from '../Routes';

export default function ResumePage() {
  return (
    <div
      style={{textAlign: 'center'}}
    >
      <embed
        style={{ width: '40%', height: 1000}}
        src={routes.RESUME_URL}
        type='application/pdf'
      />
    </div>
  );
  
  
}
