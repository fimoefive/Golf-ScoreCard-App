import React from 'react';
import PropTypes from 'prop-types';

function SingleHoleCard({ hole }) {
  return (
    <div>
      <h1>Hole Card</h1>
      <h2>COURSE: {hole.course}</h2>
      <h2>HOLE 1: {hole.hole1}</h2>
      <h2>HOLE 2: {hole.hole2}</h2>
      <h2>HOLE 3: {hole.hole3}</h2>
      <h2>HOLE 4: {hole.hole4}</h2>
      <h2>HOLE 5: {hole.hole5}</h2>
      <h2>HOLE 6: {hole.hole6}</h2>
      <h2>HOLE 7: {hole.hole7}</h2>
      <h2>HOLE 8: {hole.hole8}</h2>
      <h2>HOLE 9: {hole.hole9}</h2>
      <h2>TOTAL: {hole.total}</h2>
      <h2>Average: {hole.avg}</h2>
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleHoleCard.propTypes = {
  hole: PropTypes.object
};

export default SingleHoleCard;
