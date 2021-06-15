/* SingleHOle() from SingleHole.js file
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
        <h2>{hole.roundNum}</h2>
        <h2>{hole.par}</h2>
      </SingleHoleCard>
    </div>
  );
}

export default SingleHole;
*/
