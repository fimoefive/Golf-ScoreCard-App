import React from 'react';
import PropTypes from 'prop-types';
import GameCard from '../components/GameCard';

function Games({ user }) {
  return (
    <>
      <div className="card-container">
        {games.map((gameInfo) => (
          <GameCard
            key={gameInfo.firebaseKey}
            firebaseKey={gameInfo.firebaseKey}
            uid={gameInfo.uid}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

Games.propTypes = {
  user: PropTypes.any
};

export default Games;
