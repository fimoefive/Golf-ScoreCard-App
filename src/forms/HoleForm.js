import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addHole, updateHole } from '../helpers/data/holeData';

const GameForm = ({
  formTitle,
  setHoles,
  roundNum,
  par,
  firebaseKey,
  user,
  uid
}) => {
  const [hole, setHole] = useState({
    roundNum: roundNum || '',
    par: par || '',
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setHole((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hole.firebaseKey) {
      updateHole(hole, user).then((holeArray) => setHoles(holeArray));
    } else {
      addHole(hole, user).then((response) => {
        setHoles(response);
        history.push('/holes');
      });

      // Clears Input Fields
      setHole({
        roundNum: '',
        par: '',
        firebaseKey: null
      });
    }
  };

  return (
    <>
      <div className='hole-form'>
        <Form
          id='addHoleForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <FormGroup>
            <Label htmlFor="round">Round: </Label>
            <Input
              name='round'
              id='round'
              value={hole.roundNum}
              type='text'
              placeholder='Enter Round'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="par">Par: </Label>
            <Input
              name='par'
              id='par'
              value={hole.par}
              type='text'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>

          <div>
            <Button className="holeSubmit" color="success" type='submit'>Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

GameForm.propTypes = {
  formTitle: PropTypes.string,
  setHoles: PropTypes.func,
  gameFirebaseKey: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default GameForm;
