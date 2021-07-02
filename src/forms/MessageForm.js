import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form,
  FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addMessage, updateMessage } from '../helpers/data/messageData';

const MessageForm = ({
  formTitle,
  user,
  firebaseKey,
  message,
  timeStamp,
  uid,
  userFirebaseKey,
  setMessages
}) => {
  const [mess, setMessage] = useState({
    message: message || '',
    timeStamp: timeStamp || 'just now',
    userFirebaseKey,
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mess.firebaseKey) {
      updateMessage(mess, user.uid).then((messageArray) => setMessages(messageArray));
    } else {
      addMessage(mess, user.uid).then((response) => {
        setMessages(response);
        history.push('/messages');
      });

      // Clears Input Fields
      setMessage({
        message: '',
        timeStamp: '',
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
              value={mess.value}
              type='text'
              placeholder='Enter Message'
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* <FormGroup>
            <Label htmlFor="timestamp">Date: </Label>
            <Input
              name='timestamp'
              id='timestamp'
              value={mess.timestamp}
              type='text'
              placeholder='Enter Date'
              onChange={handleInputChange}
            />
          </FormGroup> */}

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
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  message: PropTypes.string,
  timeStamp: PropTypes.string,
  uid: PropTypes.string,
  userFirebaseKey: PropTypes.string,
  setMessages: PropTypes.func
};

export default MessageForm;
