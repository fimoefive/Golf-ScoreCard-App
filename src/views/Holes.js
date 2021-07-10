import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { getHoles } from '../helpers/data/holeData';
import HoleCard from '../components/HoleCard';
import HoleForm from '../forms/HoleForm';

function Holes({
  user,
  holes,
  setHoles
}) {
  const [showAddHole, setAddHole] = useState(false);
  // const [holes, setHoles] = useState([]);

  const handleClick = () => {
    setAddHole((prevState) => !prevState);
  };

  // useEffect(() => {
  //   // getHoles().then(setHoles);
  //   getHoles(uid).then((gamesArray) => setHoles(gamesArray));
  // }, []);

  function total(holeInfo) {
    let hole = 0;
    hole += Number(holeInfo.hole1);
    hole += Number(holeInfo.hole2);
    hole += Number(holeInfo.hole3);
    hole += Number(holeInfo.hole4);
    hole += Number(holeInfo.hole5);
    hole += Number(holeInfo.hole6);
    hole += Number(holeInfo.hole7);
    hole += Number(holeInfo.hole8);
    hole += Number(holeInfo.hole9);

    return hole;
  }

  function avg(holeInfo) {
    let hole = 0;
    hole += Number(holeInfo.hole1);
    hole += Number(holeInfo.hole2);
    hole += Number(holeInfo.hole3);
    hole += Number(holeInfo.hole4);
    hole += Number(holeInfo.hole5);
    hole += Number(holeInfo.hole6);
    hole += Number(holeInfo.hole7);
    hole += Number(holeInfo.hole8);
    hole += Number(holeInfo.hole9);
    hole /= 9;
    return hole.toFixed(2);
  }

  return (
    <>
      <div className="hole-container">
        <div>
          {!showAddHole
            ? <Button className="addGameBtn" color="primary" user={user} onClick={handleClick}>ADD Game</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <HoleForm
                setHoles={setHoles}
                user={user}
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
            total={total(holeInfo)}
            avg={avg(holeInfo)}
            user={user}
            setHoles={setHoles}
          />
        ))}
      </div>
    </>
  );
}

Holes.propTypes = {
  user: PropTypes.any,
  holes: PropTypes.array,
  setHoles: PropTypes.func
};

export default Holes;
