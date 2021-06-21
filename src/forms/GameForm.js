import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addGame, updateGame } from '../helpers/data/gameData';

const GameForm = ({
  formTitle,
  setGames,
  gameFirebaseKey,
  name,
  date,
  user,
  uid
}) => {
  const [game, setGame] = useState({
    name: name || '',
    date: date || '',
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
      updateGame(game, user.uid).then((gameArray) => setGames(gameArray));
    } else {
      addGame(game, user.uid).then((response) => {
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
      <div className='game-form'>
        <Form
          id='addGameForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <FormGroup>
            <Label htmlFor="name">Name: </Label>
            <Input
              name='name'
              id='name'
              value={game.name}
              type='text'
              placeholder='Enter a Name'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Date: </Label>
            <Input
              name='date'
              id='date'
              value={game.date}
              type='text'
              placeholder='Enter Date'
              onChange={handleInputChange}
            />
          </FormGroup>

          <div>
            <Button className="gameSubmit" color="success" type='submit'>Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

GameForm.propTypes = {
  formTitle: PropTypes.string,
  setGames: PropTypes.func,
  gameFirebaseKey: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default GameForm;
