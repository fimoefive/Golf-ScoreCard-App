import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    </>
  );
};

GameCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired
};

export default GameCard;
