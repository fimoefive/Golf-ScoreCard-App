import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const GameCard = ({
  uid,
  user,
  firebaseKey
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        // deletePlayer(firebaseKey, user)
        //   .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/games/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  }
  return (
    <>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Position: {position}</CardText>
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
          firebaseKey={firebaseKey}
        />
      }
    </>
  );
};

GameCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired
};

export default GameCard;
