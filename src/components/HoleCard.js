import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import { deleteHole } from '../helpers/data/holeData';
import HoleForm from '../forms/HoleForm';

const HoleCard = ({
  // uid,
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
  total,
  avg,
  golfScore,
  setHoles
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteHole(firebaseKey, user.uid)
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
      <CardBody body="true" className="card text-center">
        <CardTitle tag="h5" type="text">Course: {course}</CardTitle>
        <CardText type="text">Hole 1</CardText>
        <div id='hole1' type='number'>{hole1}</div>
        <CardText type="text">Hole 2</CardText>
        <div id='hole2' type='number'>{hole2}</div>
        <CardText type="text">Hole 3</CardText>
        <div id='hole3' type='number'>{hole3}</div>
        <CardText type="text">Hole 4</CardText>
        <div id='hole4' type='number'>{hole4}</div>
        <CardText type="text">Hole 5</CardText>
        <div id='hole5' type='number'>{hole5}</div>
        <CardText type="text">Hole 6</CardText>
        <div id='hole6' type='number'>{hole6}</div>
        <CardText type="text">Hole 7</CardText>
        <div id='hole7' type='number'>{hole7}</div>
        <CardText type="text">Hole 8</CardText>
        <div id='hole8' type='number'>{hole8}</div>
        <CardText type="text">Hole 9</CardText>
        <div id='hole9' type='number'>{hole9}</div>
        <div id='total' type='number'>Total: {total}</div>
        <div id='avg' type='number'>Average: {avg}</div>
        <div id='golfScore' type='string'>{golfScore}</div>
        <Button color="warning" onClick={() => handleClick('view')}>View Game</Button>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Game</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Game'}
        </Button>
        {
          editing && <HoleForm
            formTitle='Edit Game'
            firebaseKey={firebaseKey}
            // uid={uid}
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
            total={total}
            avg={avg}
            golfScore={golfScore}
            setHoles={setHoles}
          />
        }
      </CardBody>
    </>
  );
};

HoleCard.propTypes = {
  // uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  gameFirebaseKey: PropTypes.string,
  course: PropTypes.string,
  hole1: PropTypes.string,
  hole2: PropTypes.string,
  hole3: PropTypes.string,
  hole4: PropTypes.string,
  hole5: PropTypes.string,
  hole6: PropTypes.string,
  hole7: PropTypes.string,
  hole8: PropTypes.string,
  hole9: PropTypes.string,
  total: PropTypes.number,
  avg: PropTypes.string,
  golfScore: PropTypes.string,
  setHoles: PropTypes.func
};

export default HoleCard;
