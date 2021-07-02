import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage } from '../helpers/data/messageData';
import MessageForm from '../forms/MessageForm';

const MessageCard = ({
  user,
  firebaseKey,
  message,
  timeStamp,
  uid,
  setMessages
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(firebaseKey, user.uid)
          .then(setMessages);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
      <CardBody body="true" className="card text-center">
        <CardTitle tag="h5" type="text">{message}</CardTitle>
        <CardText type="number">Date: {timeStamp}</CardText>
        <CardText type="text">Player: {user.fullName}</CardText>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Message</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Message'}
        </Button>
        {
          editing && <MessageForm
            formTitle='Edit Message'
            user={user}
            firebaseKey={firebaseKey}
            message={message}
            timeStamp={timeStamp}
            uid={uid}
            setMessages={setMessages}
          />
        }
      </CardBody>
    </>
  );
};

MessageCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  message: PropTypes.string,
  timeStamp: PropTypes.any,
  uid: PropTypes.string,
  setMessages: PropTypes.func
};

export default MessageCard;
