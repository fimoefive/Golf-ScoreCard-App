import React from 'react';
import PropTypes from 'prop-types';

function SingleGameCard({ game }) {
  return (
    <div>
      <h1>Player</h1>
      <h2>NAME: {game.name}</h2>
      <h2>DATE: {game.date}</h2>
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleGameCard.propTypes = {
  game: PropTypes.object
};

export default SingleGameCard;
