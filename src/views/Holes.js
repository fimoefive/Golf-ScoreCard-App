import React from 'react';
import PropTypes from 'prop-types';
import HoleCard from '../components/HoleCard';

function Hole({ user }) {
  return (
    <>
      <div className="card-container">
        {holes.map((holeInfo) => (
          <HoleCard
            key={holeInfo.firebaseKey}
            firebaseKey={holeInfo.firebaseKey}
            uid={holeInfo.uid}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

Hole.propTypes = {
  user: PropTypes.any
};

export default Hole;
