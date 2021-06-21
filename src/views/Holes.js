import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { getHoles } from '../helpers/data/holeData';
import HoleCard from '../components/HoleCard';
import HoleForm from '../forms/HoleForm';

function Holes({
  user,
  setUser,
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

  function avg(holeInfo) {
    // console.warn(holeInfo);
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
    // console.warn(hole);
    hole /= 9;
    // console.warn(holeInfo[`hole${2}`]);
    return hole.toFixed(2);
  }

  function total(holeInfo) {
    // console.warn(holeInfo);
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
    // console.warn(hole);
    // hole /= 9;
    // console.warn(holeInfo[`hole${2}`]);
    return hole;
  }

  const golfScore = (par, holeInfo) => {
    let stroke = '';
    switch (true) {
      case (holeInfo === 1):
        stroke = 'Hole In One!';
        break;
      case (holeInfo <= par - 2):
        stroke = 'Eagle';
        break;
      case (holeInfo === par - 1):
        stroke = 'Birdie';
        break;
      case (holeInfo === par):
        stroke = 'Par';
        break;
      case (holeInfo === par + 1):
        stroke = 'Bogey';
        break;
      case (holeInfo === par + 2):
        stroke = 'Double Bogey';
        break;
      case (holeInfo >= par + 3):
        stroke = 'Go Home!';
        break;
      default:
        stroke = 'Game Over!';
    }
    // console.warn(stroke);
    return stroke;
  };

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
            avg={avg(holeInfo)}
            total={total(holeInfo)}
            golfScore={golfScore(holeInfo)}
            // uid={holeInfo.uid}
            user={user}
            setUser={setUser}
            holes={holes}
            setHoles={setHoles}
          />
        ))}
      </div>
    </>
  );
}

Holes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  holes: PropTypes.array,
  setHoles: PropTypes.func
};

export default Holes;
