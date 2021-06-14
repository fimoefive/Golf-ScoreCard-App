import React from 'react';
import PropTypes from 'prop-types';
import GameCard from '../components/GameCard';

function Games({ user, games, setGames }) {
  return (
    <>
      <div className="card-container">
        {games.map((gameInfo) => (
          <GameCard
            key={gameInfo.firebaseKey}
            firebaseKey={gameInfo.firebaseKey}
            name={gameInfo.name}
            date={gameInfo.date}
            uid={gameInfo.uid}
            user={user}
            setGame={setGames}
          />
        ))}
      </div>
    </>
  );
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  setGames: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Games;
