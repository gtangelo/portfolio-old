import React from 'react'

const Title = ({title}) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          textTransform: 'lowercase',
          fontWeight: 'bold',
          fontSize: 36,
          padding: '10px',
        }}
      >
        {title}
      </div>
      <hr />
      <br/>
    </div>
  );
}

export default Title
