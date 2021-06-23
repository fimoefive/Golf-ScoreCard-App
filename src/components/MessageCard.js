import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  // CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage } from '../helpers/data/holeData';
import MessageForm from '../forms/MessageForm';

const MessageCard = ({
  uid,
  user,
  firebaseKey,
  message,
  timestamp,
  setMessages
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(firebaseKey, user)
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
      <CardBody body="true" className="card text-center" id={uid}>
        <CardTitle tag="h5" type="number">Message: {message}</CardTitle>
        <CardTitle type="number">Date: {timestamp}</CardTitle>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Message</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Message'}
        </Button>
        {
          editing && <MessageForm
            formTitle='Edit Message'
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
            message={message}
            timestamp={timestamp}
            setMessages={setMessages}
          />
        }
      </CardBody>
    </>
  );
};

MessageCard.propTypes = {
  uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  message: PropTypes.string,
  timestamp: PropTypes.number,
  setMessages: PropTypes.func
};

export default MessageCard;
