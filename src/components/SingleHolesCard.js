import React from 'react';
import PropTypes from 'prop-types';

function SingleHoleCard({ children, hole }) {
  return (
    <div>
      <h2>Hole: {hole.name}</h2>
      {children}
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleHoleCard.propTypes = {
  children: PropTypes.any,
  hole: PropTypes.object
};

export default SingleHoleCard;
