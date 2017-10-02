import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Guess Who</h1>
      <p>Our participants today come from the Hogwarts class of 1998</p>
      <NavLink
        to="/game"
      >Begin Game</NavLink>
    </div>
  );
};

export default Home;
