import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
  // messages,
  firebaseKey,
  message,
  timestamp,
  uid,
  setMessages
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(firebaseKey, user.uid)
          .then(setMessages);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/messages/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <>
      <CardBody body="true" className="card text-center">
        <CardTitle tag="h5" type="text">Message: {message}</CardTitle>
        <CardText type="number">Date: {timestamp}</CardText>
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
            timestamp={timestamp}
            uid={uid}
            // messages={messages}
            setMessages={setMessages}
          />
        }
      </CardBody>
    </>
  );
};

MessageCard.propTypes = {
  user: PropTypes.any,
  // messages: PropTypes.array,
  firebaseKey: PropTypes.string.isRequired,
  message: PropTypes.string,
  timestamp: PropTypes.string,
  uid: PropTypes.string,
  setMessages: PropTypes.func
};

export default MessageCard;
