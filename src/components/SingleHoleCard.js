import React from 'react';
import PropTypes from 'prop-types';

function SingleHoleCard({
  hole,
  golfScore
}) {
  function totalS(holeInfo) {
    let total = 0;
    total += Number(holeInfo.hole1);
    total += Number(holeInfo.hole2);
    total += Number(holeInfo.hole3);
    total += Number(holeInfo.hole4);
    total += Number(holeInfo.hole5);
    total += Number(holeInfo.hole6);
    total += Number(holeInfo.hole7);
    total += Number(holeInfo.hole8);
    total += Number(holeInfo.hole9);

    return total;
  }

  function gameAvg(holeInfo) {
    let avg = 0;
    avg += Number(holeInfo.hole1);
    avg += Number(holeInfo.hole2);
    avg += Number(holeInfo.hole3);
    avg += Number(holeInfo.hole4);
    avg += Number(holeInfo.hole5);
    avg += Number(holeInfo.hole6);
    avg += Number(holeInfo.hole7);
    avg += Number(holeInfo.hole8);
    avg += Number(holeInfo.hole9);
    avg /= 9;
    return avg.toFixed(2);
  }

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
      <h2>TOTAL: {totalS(hole)}</h2>
      <h2>Average: {gameAvg(hole)}</h2>
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
