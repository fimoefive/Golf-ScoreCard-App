import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import GameCard from '../components/GameCard';
// import GameForm from '../forms/GameForm';
import { getHoles } from '../helpers/data/holeData';
import golfFlag from '../assets/golfFlag.jpeg';
import '../styles/games.scss';

function Games({
  user,
  // games,
  // setGames
}) {
  // const [showAddGame, setAddGame] = useState(false);
  // const [games, setGames] = useState([]);
  const [playerAverage, setPlayerAverage] = useState(0);

  // const handleClick = () => {
  //   setAddGame((prevState) => !prevState);
  // };

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
      setPlayerAverage(average / holesArray.length);
    });
  }, []);

  return (
    <>
      <div className="game-container">
        <div>
          {/* {!showAddGame
            ? <Button className="addGameBtn" color="primary" user={user} onClick={handleClick}>ADD Player</Button>
            : <div>
              <Button className="closeForm" color="secondary" user={user} onClick={handleClick}>CLOSE</Button>
              <GameForm
                setGames={setGames}
                user={user}
              />
            </div>
          } */}
        </div>
        <br />
        {/* <ImageBackground>{golfFlag}</ImageBackground> */}
        <img src={golfFlag} width="500px" height="400px" alt="golf flag" />
        <br />
        <h2>Player Name: {user.fullName}</h2>
        <br />
        <h2>Player Average: {playerAverage.toFixed(2)}</h2>
        {/* <image src="{user.profileImage}"></image> */}
      </div>
    </>
  );
}

Games.propTypes = {
  user: PropTypes.any,
  // games: PropTypes.array,
  // setGames: PropTypes.func
};

export default Games;
