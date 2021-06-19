import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getHoles } from '../helpers/data/holeData';
import HoleCard from '../components/HoleCard';
import HoleForm from '../forms/HoleForm';

function Holes({ user }) {
  const [holes, setHoles] = useState([]);
  // const [total, setTotal] = useState(hole1 + hole2 + hole3 + hole4 + hole5 + hole6 + hole7 + hole8 + hole9);
  // const [total, setTotal] = useState(0);
  const [totals, setTotals] = useState([]);
  // const [average, setAverage] = useState([]);
  const [showAddHole, setAddHole] = useState(false);

  const handleClick = () => {
    setAddHole((prevState) => !prevState);
  };

  useEffect(() => {
    getHoles().then(setHoles);
  }, []);

  // const holeCal = () => {
  //   let holeTotal = 0;
  //   const hLength = holes.length;
  //   holes.forEach(({ hole }) holeTotal += hole);
  //   return holeTotal / hLength;
  // };

  function avg() {
    let hole = 0;
    holes.forEach((obj) => {
      hole += obj.hole;
    });
    hole /= holes.length;
    return hole;
  }
  const totalScore = holes.reduce(
    (previousScore, currentScore) => previousScore + currentScore,
    0
  );
  console.warn(totalScore);

  return (
    <>
      <div className="hole-container">
        <div>
          {!showAddHole
            ? <Button className="addHoleBtn" color="primary" user={user} onClick={handleClick}>ADD HOLE</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <HoleForm
                setHoles={setHoles}
                user={user}
                setTotals={setTotals}
              />
            </div>
          }
        </div>
        {holes.map((holeInfo) => (
          <HoleCard className="holeCard"
            key={holeInfo.firebaseKey}
            firebaseKey={holeInfo.firebaseKey}
            course={holeInfo.course}
            hole1={holeInfo.hole1}
            hole2={holeInfo.hole2}
            hole3={holeInfo.hole3}
            hole4={holeInfo.hole4}
            hole5={holeInfo.hole5}
            hole6={holeInfo.hole6}
            hole7={holeInfo.hole7}
            hole8={holeInfo.hole8}
            hole9={holeInfo.hole9}
            totals={totals}
            // totalScore={totalScore}
            // holeCal={holeCal}
            avg={avg}
            uid={holeInfo.uid}
            user={user}
            setHoles={setHoles}
          />
        ))}
      </div>
    </>
  );
}

Holes.propTypes = {
  holes: PropTypes.array,
  setHoles: PropTypes.func,
  user: PropTypes.any
};

export default Holes;
