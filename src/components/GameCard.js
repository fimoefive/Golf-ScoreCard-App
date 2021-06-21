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
  // uid,
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
        deleteGame(gameFirebaseKey, user.uid)
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
      <CardBody body="true" className="card text-center">
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Date: {date}</CardText>
        <Button color="warning" onClick={() => handleClick('view')}>View Player</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Player'}
        </Button>
        {
          editing && <GameForm
            formTitle='Edit Player'
            gameFirebaseKey={gameFirebaseKey}
            user={user}
            name={name}
            date={date}
            // uid={uid}
            setGames={setGames}
          />
        }
      </CardBody>
    </>
  );
};

GameCard.propTypes = {
  user: PropTypes.any,
  gameFirebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // uid: PropTypes.string,
  setGames: PropTypes.func
};

export default GameCard;
