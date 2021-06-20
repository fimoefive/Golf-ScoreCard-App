import React from 'react';
import PropTypes from 'prop-types';

function SingleHoleCard({
  hole,
  avg,
  total,
  golfScore
}) {
  return (
    <div>
      <h1>COURSE</h1>
      <h2>{hole.course}</h2>
      <h2>HOLE 1</h2>
      <h3>Strokes: {hole.hole1}</h3>
      <h2>HOLE 2 </h2>
      <h3>Strokes: {hole.hole2}</h3>
      <h2>HOLE 3</h2>
      <h3>Strokes: {hole.hole3}</h3>
      <h2>HOLE 4</h2>
      <h3>Strokes: {hole.hole4}</h3>
      <h2>HOLE 5</h2>
      <h3>Strokes: {hole.hole5}</h3>
      <h2>HOLE 6</h2>
      <h3>Strokes: {hole.hole6}</h3>
      <h2>HOLE 7 </h2>
      <h3>Strokes: {hole.hole7}</h3>
      <h2>HOLE 8</h2>
      <h3>Strokes: {hole.hole8}</h3>
      <h2>HOLE 9</h2>
      <h3>Strokes: {hole.hole9}</h3>
      <h2>TOTAL: {total}</h2>
      <h2>Average: {avg}</h2>
      <h2>{golfScore}</h2>
      <footer>&#169; 2021</footer>
    </div>
  );
}

SingleHoleCard.propTypes = {
  hole: PropTypes.object,
  total: PropTypes.number,
  avg: PropTypes.string,
  golfScore: PropTypes.string,
};

export default SingleHoleCard;
