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
  gameFirebaseKey,
  name,
  date,
  setGames
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteGame(gameFirebaseKey, user)
          .then(setGames);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/games/${gameFirebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
      <CardBody body="true" className="card text-center" id={uid}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{date}</CardText>
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
            gameFirebaseKey={gameFirebaseKey}
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
  uid: PropTypes.string,
  user: PropTypes.any,
  gameFirebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  setGames: PropTypes.func
};

export default GameCard;
