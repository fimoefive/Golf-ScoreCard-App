import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addGame, updateGame } from '../helpers/data/gameData';

const GameForm = ({
  setGames,
  name,
  date,
  gameFirebaseKey,
  user,
  uid
}) => {
  const [game, setGame] = useState({
    name: name || '',
    date: date || null,
    gameFirebaseKey: gameFirebaseKey || null,
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setGame((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game.gameFirebaseKey) {
      updateGame(game, user).then((gameArray) => setGame(gameArray));
    } else {
      addGame(game, user).then((response) => {
        setGames(response);
        history.push('/games');
      });

      // Clears Input Fields
      setGame({
        name: '',
        date: '',
        gameFirebaseKey: null
      });
    }
  };

  return (
    <>
      <form
        id='game-form'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name='name'
            id='name'
            value={game.name}
            type='text'
            placeholder='Enter a Name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="date">Date: </label>
          <input
            name='date'
            id='date'
            value={game.date}
            type='text'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Button className="gameSubmit" color="success" type='submit'>Submit</Button>
        </div>
      </form>
    </>
  );
};

GameForm.propTypes = {
  setGames: PropTypes.func,
  gameFirebaseKey: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.any,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default GameForm;
