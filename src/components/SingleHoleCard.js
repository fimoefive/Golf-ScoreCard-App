import React from 'react';
import PropTypes from 'prop-types';

function SingleHoleCard({ hole }) {
  return (
    <div>
      <h1>Hole</h1>
      <h2>ROUND: {hole.roundNum}</h2>
      <h2>PAR: {hole.par}</h2>
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleHoleCard.propTypes = {
  children: PropTypes.any,
  hole: PropTypes.object
};

export default SingleHoleCard;
