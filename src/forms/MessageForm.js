import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addMessage, updateMessage } from '../helpers/data/holeData';

const MessageForm = ({
  formTitle,
  setMessages,
  message,
  timestamp,
  firebaseKey,
  user,
  uid
}) => {
  const [hole, setHole] = useState({
    message: message || '',
    timestamp: timestamp || '',
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
      updateMessage(message, user).then((holeArray) => setMessages(holeArray));
    } else {
      addMessage(message, user).then((response) => {
        setMessages(response);
        history.push('/messages');
      });

      // Clears Input Fields
      setHole({
        message: '',
        timestamp: '',
        firebaseKey: null
      });
    }
  };

  return (
    <>
      <div className='message-form'>
        <Form
          id='addMessageForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <FormGroup>
            <Label htmlFor="message">Message: </Label>
            <Input
              name='message'
              id='message'
              value={hole.message}
              type='number'
              placeholder='Enter Round'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="timestamp">Date: </Label>
            <Input
              name='timestamp'
              id='timestamp'
              value={hole.timestamp}
              type='number'
              placeholder='Enter Par'
              onChange={handleInputChange}
            />
          </FormGroup>

          <div>
            <Button className="messageSubmit" color="success" type='submit'>Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

MessageForm.propTypes = {
  formTitle: PropTypes.string,
  setMessages: PropTypes.func,
  firebaseKey: PropTypes.string,
  message: PropTypes.number,
  timestamp: PropTypes.number,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default MessageForm;
