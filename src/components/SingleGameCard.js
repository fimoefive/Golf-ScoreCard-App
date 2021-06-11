import React from 'react';
import PropTypes from 'prop-types';

function SingleGameCard({ children, game }) {
  return (
    <div>
      <h2>Game: {game.name}</h2>
      {children}
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleGameCard.propTypes = {
  children: PropTypes.any,
  game: PropTypes.object
};

export default SingleGameCard;
