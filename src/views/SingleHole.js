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

  return (
    <div>
      <SingleHoleCard hole={hole}>
        <h2>{hole.course}</h2>
        <h2>{hole.hole1}</h2>
        <h2>{hole.hole2}</h2>
        <h2>{hole.hole3}</h2>
        <h2>{hole.hole4}</h2>
        <h2>{hole.hole5}</h2>
        <h2>{hole.hole6}</h2>
        <h2>{hole.hole7}</h2>
        <h2>{hole.hole8}</h2>
        <h2>{hole.hole9}</h2>
        {/* <h2>{hole.total}</h2>
        <h2>{hole.avg}</h2> */}
      </SingleHoleCard>
    </div>
  );
}

export default SingleHole;
