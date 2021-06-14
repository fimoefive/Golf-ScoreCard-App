import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import HoleCard from '../components/HoleCard';
import HoleForm from '../forms/HoleForm';

function Holes({ user, holes, setHoles }) {
  const [showAddHole, setAddHole] = useState(false);

  const handleClick = () => {
    setAddHole((prevState) => !prevState);
  };

  return (
    <>
      <div className="card-container">
        <div>
          {!showAddHole
            ? <Button className="addHoleBtn" color="primary" user={user} onClick={handleClick}>ADD HOLE</Button>
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
            roundNum={holeInfo.roundNum}
            par={holeInfo.par}
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
  holes: PropTypes.array.isRequired,
  setHoles: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Holes;
