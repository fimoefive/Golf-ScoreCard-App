import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { getGames } from '../helpers/data/gameData';
import GameCard from '../components/GameCard';
import GameForm from '../forms/GameForm';

function Games({
  user,
  games,
  setGames
}) {
  const [showAddGame, setAddGame] = useState(false);
  // const [games, setGames] = useState([]);

  const handleClick = () => {
    setAddGame((prevState) => !prevState);
  };

  // useEffect(() => {
  //   // getGames().then(setGames);
  //   getGames(user).then((playersArray) => setGames(playersArray));
  // }, [games.length]);

  return (
    <>
      <div className="game-container">
        <div>
          {!showAddGame
            ? <Button className="addGameBtn" color="primary" user={user} onClick={handleClick}>ADD Player</Button>
            : <div>
              <Button className="closeForm" color="secondary" user={user} onClick={handleClick}>CLOSE</Button>
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
            user={user}
            games={games}
            setGames={setGames}
          />
        ))}
      </div>
    </>
  );
}

Games.propTypes = {
  user: PropTypes.any,
  games: PropTypes.array,
  setGames: PropTypes.func
};

export default Games;
