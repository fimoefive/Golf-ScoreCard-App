import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getGames } from '../helpers/data/gameData';
import GameCard from '../components/GameCard';
import GameForm from '../forms/GameForm';

function Games({ user }) {
  const [showAddGame, setAddGame] = useState(false);
  const [games, setGames] = useState([]);

  const handleClick = () => {
    setAddGame((prevState) => !prevState);
  };

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <>
      <div className="game-container">
        <div>
          {!showAddGame
            ? <Button className="addGameBtn" color="primary" user={user} onClick={handleClick}>ADD GAME</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <GameForm
                setGames={setGames}
                user={user}
              />
            </div>
          }
        </div>
        {games.map((gameInfo) => (
          <GameCard className="gameCard"
            key={gameInfo.gameFirebaseKey}
            gameFirebaseKey={gameInfo.gameFirebaseKey}
            name={gameInfo.name}
            date={gameInfo.date}
            uid={gameInfo.uid}
            user={user}
            // games={games}
            setGames={setGames}
          />
        ))}
      </div>
    </>
  );
}

Games.propTypes = {
  games: PropTypes.array,
  setGames: PropTypes.func,
  user: PropTypes.any
};

export default Games;
