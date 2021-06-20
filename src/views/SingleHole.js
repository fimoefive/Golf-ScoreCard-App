import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleHoleCard from '../components/SingleHoleCard';
import { getSingleHole } from '../helpers/data/holeData';

function SingleHole() {
  const [hole, setHole] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleHole(firebaseKey).then(setHole);
  }, []);

  // function avg(holeInfo) {
  //   let holes = 0;
  //   holes += Number(holeInfo.hole1);
  //   holes += Number(holeInfo.hole2);
  //   holes += Number(holeInfo.hole3);
  //   holes += Number(holeInfo.hole4);
  //   holes += Number(holeInfo.hole5);
  //   holes += Number(holeInfo.hole6);
  //   holes += Number(holeInfo.hole7);
  //   holes += Number(holeInfo.hole8);
  //   holes += Number(holeInfo.hole9);
  //   holes /= 9;
  //   console.warn(holeInfo[`holes${2}`]);
  //   return holes.toFixed(2);
  // }

  // function total(holeInfo) {
  //   let holes = 0;
  //   holes += Number(holeInfo.hole1);
  //   holes += Number(holeInfo.hole2);
  //   holes += Number(holeInfo.hole3);
  //   holes += Number(holeInfo.hole4);
  //   holes += Number(holeInfo.hole5);
  //   holes += Number(holeInfo.hole6);
  //   holes += Number(holeInfo.hole7);
  //   holes += Number(holeInfo.hole8);
  //   holes += Number(holeInfo.hole9);
  //   return holes;
  // }

  // const golfScore = (par, holeInfo) => {
  //   let stroke = '';
  //   switch (true) {
  //     case (holeInfo === 1):
  //       stroke = 'Hole In One!';
  //       break;
  //     case (holeInfo <= par - 2):
  //       stroke = 'Eagle';
  //       break;
  //     case (holeInfo === par - 1):
  //       stroke = 'Birdie';
  //       break;
  //     case (holeInfo === par):
  //       stroke = 'Par';
  //       break;
  //     case (holeInfo === par + 1):
  //       stroke = 'Bogey';
  //       break;
  //     case (holeInfo === par + 2):
  //       stroke = 'Double Bogey';
  //       break;
  //     case (holeInfo >= par + 3):
  //       stroke = 'Go Home!';
  //       break;
  //     default:
  //       stroke = 'Game Over!';
  //   }
  //   return stroke;
  // };

  return (
    <div>
      <SingleHoleCard hole={hole}>
        <h2>course={hole.course}</h2>
        course={hole.course}
        <h2>{hole.hole1}</h2>
        <h2>{hole.hole2}</h2>
        <h2>{hole.hole3}</h2>
        <h2>{hole.hole4}</h2>
        <h2>{hole.hole5}</h2>
        <h2>{hole.hole6}</h2>
        <h2>{hole.hole7}</h2>
        <h2>{hole.hole8}</h2>
        <h2>{hole.hole9}</h2>
        {/* <h2>{total(hole)}</h2>
        total={total(hole)}
        avg={avg(hole)}
        golfScore={golfScore(hole)}
        */}
      </SingleHoleCard>
    </div>
  );
}

export default SingleHole;
