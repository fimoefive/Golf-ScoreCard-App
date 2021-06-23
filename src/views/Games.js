import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import { getGames } from '../helpers/data/gameData';
// import GameCard from '../components/GameCard';
import GameForm from '../forms/GameForm';
import { getHoles } from '../helpers/data/holeData';

function Games({
  user,
  // name,
  // games,
  setGames,
  // holes,
  // setHoles
}) {
  const [showAddGame, setAddGame] = useState(false);
  // const [games, setGames] = useState([]);
  const [playerAverage, setPlayerAverage] = useState(0);

  const handleClick = () => {
    setAddGame((prevState) => !prevState);
  };

  useEffect(() => {
    getHoles(user.uid).then((holesArray) => {
      let average = 0;
      holesArray.forEach((holes) => {
        average += Number(holes.hole1);
        average += Number(holes.hole2);
        average += Number(holes.hole3);
        average += Number(holes.hole4);
        average += Number(holes.hole5);
        average += Number(holes.hole6);
        average += Number(holes.hole7);
        average += Number(holes.hole8);
        average += Number(holes.hole9);
      });
      //   average += Number(holesArray[i].hole2);
      //   average += Number(holesArray[i].hole3););
      // for (let i = 0; i < holesArray.length; i = +1) {
      //   average += Number(holesArray[i].hole1);
      //   average += Number(holesArray[i].hole2);
      //   average += Number(holesArray[i].hole3);
      // }
      // console.warn(average);
      setPlayerAverage(average / holesArray.length);
    });
  }, []);

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
        <h2>Player Name: {user.fullName}</h2>
        <h2>Player Average: {playerAverage}</h2>
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
