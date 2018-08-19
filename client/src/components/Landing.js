import React from 'react';

const Landing = () => {
  const style = {
    background: {
      backgroundImage: 'url("http://via.placeholder.com/1216x316")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      minHeight: '316px',
      margin: '2rem auto',
      flexFlow: 'column wrap'
    },
    centerText: {}
  };
  return (
    <div style={style.background}>
      <h1>SurveyServer</h1>
      <p>Collect feedback from your users!</p>
    </div>
  );
};

export default Landing;
