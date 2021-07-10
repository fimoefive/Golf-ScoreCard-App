import React from 'react';
import golfBall from '../assets/golfBall.jpeg';

export default function Main() {
  return (
    <div>
      <br />
      <h1>Welcome to Golf Score App</h1>
      <br />
      <img src={golfBall} alt="golf ball" height='400px' />
      <br />
      <h4 padding="10px">By: Martin Sisk</h4>
    </div>
  );
}
