import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleGameCard from '../components/SingleGameCard';
import { getSingleGame } from '../helpers/data/gameData';

function SingleGame() {
  const [game, setGame] = useState({});
  const { gameFirebaseKey } = useParams();

  useEffect(() => {
    getSingleGame(gameFirebaseKey).then(setGame);
  }, []);

  return (
    <div>
      <SingleGameCard game={game}>
        <h2>{game.name}</h2>
        <h2>{game.date}</h2>
      </SingleGameCard>
    </div>
  );
}

export default SingleGame;
