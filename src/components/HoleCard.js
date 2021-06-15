import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteHole } from '../helpers/data/holeData';
import HoleForm from '../forms/HoleForm';

const HoleCard = ({
  uid,
  user,
  firebaseKey,
  gameFirebaseKey,
  roundNum,
  par,
  setHoles
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteHole(firebaseKey, user)
          .then(setHoles);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/holes/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
      <CardBody body="true" className="card text-center" id={uid}>
        <CardTitle tag="h5">{roundNum}</CardTitle>
        <CardText>Position: {par}</CardText>
        <Button color="warning" onClick={() => handleClick('view')}>View Hole</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Hole</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Hole'}
        </Button>
        {
          editing && <HoleForm
            formTitle='Edit Hole'
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
            gameFirebaseKey={gameFirebaseKey}
            roundNum={roundNum}
            par={par}
            setHoles={setHoles}
          />
        }
      </CardBody>
    </>
  );
};

HoleCard.propTypes = {
  uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  gameFirebaseKey: PropTypes.string,
  roundNum: PropTypes.number,
  par: PropTypes.number,
  setHoles: PropTypes.func
};

export default HoleCard;
