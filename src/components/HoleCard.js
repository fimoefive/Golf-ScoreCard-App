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
  course,
  hole1,
  hole2,
  hole3,
  hole4,
  hole5,
  hole6,
  hole7,
  hole8,
  hole9,
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
        <CardTitle tag="h5" type="text">Course: {course}</CardTitle>
        <CardText type="number">Hole 1: {hole1}</CardText>
        <CardText type="number">Hole 2: {hole2}</CardText>
        <CardText type="number">Hole 3: {hole3}</CardText>
        <CardText type="number">Hole 4: {hole4}</CardText>
        <CardText type="number">Hole 5: {hole5}</CardText>
        <CardText type="number">Hole 6: {hole6}</CardText>
        <CardText type="number">Hole 7: {hole7}</CardText>
        <CardText type="number">Hole 8: {hole8}</CardText>
        <CardText type="number">Hole 9: {hole9}</CardText>
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
            course={course}
            hole1={hole1}
            hole2={hole2}
            hole3={hole3}
            hole4={hole4}
            hole5={hole5}
            hole6={hole6}
            hole7={hole7}
            hole8={hole8}
            hole9={hole9}
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
  course: PropTypes.string,
  hole1: PropTypes.number,
  hole2: PropTypes.number,
  hole3: PropTypes.number,
  hole4: PropTypes.number,
  hole5: PropTypes.number,
  hole6: PropTypes.number,
  hole7: PropTypes.number,
  hole8: PropTypes.number,
  hole9: PropTypes.number,
  setHoles: PropTypes.func
};

export default HoleCard;
