import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteGame } from '../helpers/data/gameData';
import GameForm from '../forms/GameForm';

const GameCard = ({
  uid,
  user,
  game_firebaseKey,
  name,
  date,
  setGames
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteGame(game_firebaseKey, user)
          .then(setGames);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/games/${game_firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
      <CardBody body="true" className="card text-center" key={game_firebaseKey} id={uid}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText></CardText>
        <Button color="warning" onClick={() => handleClick('view')}>View Game</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Game</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Game'}
        </Button>
        {
          editing && <GameForm
            formTitle='Edit Game'
            uid={uid}
            user={user}
            game_firebaseKey={game_firebaseKey}
            name={name}
            date={date}
            setGames={setGames}
          />
        }
      </CardBody>
    </>
  );
};

GameCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  game_firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string,
  date: PropTypes.date,
  setGames: PropTypes.func
};

export default GameCard;
