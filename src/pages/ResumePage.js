import React from 'react';
import routes from '../Routes';

export default function ResumePage() {
  return (
    <div id='resume-section' style={{ textAlign: 'center' }}>
      <br/>
      <embed
        style={{ width: '55%', height: 1250 }}
        src={routes.RESUME_URL}
        type='application/pdf'
      />
    </div>
  );
  
  
}
