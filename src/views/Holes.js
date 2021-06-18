import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getHoles } from '../helpers/data/holeData';
import HoleCard from '../components/HoleCard';
import HoleForm from '../forms/HoleForm';

function Holes({ user }) {
  const [showAddHole, setAddHole] = useState(false);
  const [holes, setHoles] = useState([]);
  // const [total, setTotal] = useState([]);
  // const [average, setAverage] = useState([]);

  const handleClick = () => {
    setAddHole((prevState) => !prevState);
  };

  useEffect(() => {
    getHoles().then(setHoles);
  }, []);

  // const addTotal = () => {
  //   indexOf.holes.hole1 +
  //     indexOf.holes.hole2 +
  //     indexOf.holes.hole3 +
  //     indexOf.holes.hole4 +
  //     indexOf.holes.hole5 +
  //     indexOf.holes.hole6 +
  //     indexOf.holes.hole7 +
  //     indexOf.holes.hole8 +
  //     indexOf.holes.hole9 +
  //   return sum;
  // };

  holes.forEach(addingHoles);
  function addingHoles(hole, index) {
    { hole.hole1 } + 
  };

  return (
    <>
      <div className="hole-container">
        <div>
          {!showAddHole
            ? <Button className="addHoleBtn" color="primary" user={user} onClick={handleClick}>ADD HOLE</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <HoleForm
                formTitle='ADD HOLE'
                setHoles={setHoles}
                user={user}
              />
            </div>
          }
        </div>
        {holes.length && holes.map((holeInfo) => (
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
            total={holeInfo.total}
            avg={holeInfo.avg}
            uid={holeInfo.uid}
            user={user}
            // setTotal={setTotal}
            // setAverage={setAverage}
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
  // total: PropTypes.array,
  // setTotal: PropTypes.func,
  // average: PropTypes.array,
  // setAverage: PropTypes.func,
  user: PropTypes.any
};

export default Holes;
