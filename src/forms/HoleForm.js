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
  firebaseKey,
  user,
  uid
}) => {
  const [hole, setHole] = useState({
    course: course || '',
    hole1: hole1 || 0,
    hole2: hole2 || 0,
    hole3: hole3 || 0,
    hole4: hole4 || 0,
    hole5: hole5 || 0,
    hole6: hole6 || 0,
    hole7: hole7 || 0,
    hole8: hole8 || 0,
    hole9: hole9 || 0,
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
      updateHole(hole, user.uid).then((holeArray) => setHoles(holeArray));
    } else {
      addHole(hole, user.uid).then((response) => {
        setHoles(response);
        history.push('/holes');
      });

      // Clears Input Fields
      setHole({
        course: '',
        hole1: 0,
        hole2: 0,
        hole3: 0,
        hole4: 0,
        hole5: 0,
        hole6: 0,
        hole7: 0,
        hole8: 0,
        hole9: 0,
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
            <Label htmlFor="course">Course: </Label>
            <Input
              name='course'
              id='course'
              value={hole.course}
              type='text'
              placeholder='Enter Course'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="hole">Hole 1: </Label>
            <Input
              name='hole1'
              id='hole1'
              value={hole.hole1}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 2: </Label>
            <Input
              name='hole2'
              id='hole2'
              value={hole.hole2}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 3: </Label>
            <Input
              name='hole3'
              id='hole3'
              value={hole.hole3}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 4: </Label>
            <Input
              name='hole4'
              id='hole4'
              value={hole.hole4}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 5: </Label>
            <Input
              name='hole5'
              id='hole5'
              value={hole.hole5}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 6: </Label>
            <Input
              name='hole6'
              id='hole6'
              value={hole.hole6}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 7: </Label>
            <Input
              name='hole7'
              id='hole7'
              value={hole.hole7}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 8: </Label>
            <Input
              name='hole8'
              id='hole8'
              value={hole.hole8}
              type='number'
              placeholder='0'
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="hole">Hole 9: </Label>
            <Input
              name='hole9'
              id='hole9'
              value={hole.hole9}
              type='number'
              placeholder='0'
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
  setTotal: PropTypes.func,
  firebaseKey: PropTypes.string,
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
  uid: PropTypes.string,
  user: PropTypes.any
};

export default HoleForm;
