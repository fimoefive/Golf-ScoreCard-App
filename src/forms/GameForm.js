import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { addGame, updateGame } from '../helpers/data/GameData';

const GameForm = ({
  setGames,
  name,
  date,
  game_firebaseKey,
  user,
  uid
}) => {
  const [game, setGame] = useState({
    name: name || '',
    date: date || null,
    game_firebaseKey: game_firebaseKey || null,
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
    if (game.game_firebaseKey) {
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
        game_firebaseKey: null
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
          <button className="gameSubmit" type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
};

GameForm.propTypes = {
  setGames: PropTypes.func,
  game_firebaseKey: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.any,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default GameForm;
