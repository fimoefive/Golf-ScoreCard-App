import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';

const HoleCard = ({
  uid,
  user,
  firebaseKey
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
  }
  return (
    <>
      <CardBody body="true" className="card text-center" id={uid}>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Position: {position}</CardText>
        <Button color="warning" onClick={() => handleClick('view')}>View Hole</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Hole</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Hole'}
        </Button>
        {
          editing && <HoleForm
            formTitle='Edit Hole'
            uid={uid}
            user={user}
            firebaseKey={firebaseKey}
          />
        }
      </CardBody>
    </>
  );
};

HoleCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired
};

export default HoleCard;
