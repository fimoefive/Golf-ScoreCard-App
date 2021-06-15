import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addHole, updateHole } from '../helpers/data/holeData';

const HoleForm = ({
  formTitle,
  setHoles,
  title,
  hole1,
  hole2,
  hole3,
  hole4,
  hole5,
  hole6,
  hole7,
  hole8,
  hole9,
  firebaseKey,
  user,
  uid
}) => {
  const [hole, setHole] = useState({
    title: title || '',
    hole1: hole1 || '',
    hole2: hole2 || '',
    hole3: hole3 || '',
    hole4: hole4 || '',
    hole5: hole5 || '',
    hole6: hole6 || '',
    hole7: hole7 || '',
    hole8: hole8 || '',
    hole9: hole9 || '',
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
        title: '',
        hole1: '',
        hole2: '',
        hole3: '',
        hole4: '',
        hole5: '',
        hole6: '',
        hole7: '',
        hole8: '',
        hole9: '',
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
            <Label htmlFor="title"></Label>
            <Input
              name='title'
              id='title'
              value={hole.title}
              type='text'
              placeholder='Enter Title'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="hole1">Hole 1: </Label>
            <Input
              name='hole1'
              id='hole1'
              value={hole.hole1}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole2">Hole 2: </Label>
            <Input
              name='hole2'
              id='hole2'
              value={hole.hole2}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole3">Hole 3: </Label>
            <Input
              name='hole3'
              id='hole3'
              value={hole.hole3}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole4">Hole 4: </Label>
            <Input
              name='hole4'
              id='hole4'
              value={hole.hole4}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole5">Hole 5: </Label>
            <Input
              name='hole5'
              id='hole5'
              value={hole.hole5}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole6">Hole 6: </Label>
            <Input
              name='hole6'
              id='hole6'
              value={hole.hole6}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole7">Hole 7: </Label>
            <Input
              name='hole7'
              id='hole7'
              value={hole.hole7}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole8">Hole 8: </Label>
            <Input
              name='hole8'
              id='hole8'
              value={hole.hole8}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole9">Hole 9: </Label>
            <Input
              name='hole9'
              id='hole9'
              value={hole.hole9}
              type='number'
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

HoleForm.propTypes = {
  formTitle: PropTypes.string,
  setHoles: PropTypes.func,
  firebaseKey: PropTypes.string,
  title: PropTypes.string,
  hole1: PropTypes.number,
  hole1: PropTypes.number,
  hole2: PropTypes.number,
  hole3: PropTypes.number,
  hole4: PropTypes.number,
  hole5: PropTypes.number,
  hole6: PropTypes.number,
  hole7: PropTypes.number,
  hole8: PropTypes.number,
  hole9: PropTypes.number,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default HoleForm;
