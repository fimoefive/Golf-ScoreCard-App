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
// import { getUser } from '../helpers/data/userData';

const MessageCard = ({
  user,
  firebaseKey,
  message,
  timeStamp,
  // timestamp,
  // date,
  uid,
  userFirebaseKey,
  loggedUserKey,
  setMessages
}) => {
  const [editing, setEditing] = useState(false);
  // const [username, setUsername] = useState({});

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

  const userCanEdit = () => (
    <>
      <Button color='info' onClick={() => handleClick('edit')}>
        {editing ? 'Close' : 'Edit'}
      </Button>
      {
        editing && <MessageForm
          formTitle='Edit Message'
          user={user}
          firebaseKey={firebaseKey}
          message={message}
          timeStamp={timeStamp}
          date={Date}
          uid={uid}
          userFirebaseKey={userFirebaseKey}
          setMessages={setMessages}
        />
      }
      <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
    </>
  );

  const userReactions = () => (
    <>
      <Button className="likeBtn">Like</Button>
      <Button className="dislikeBtn">DisLike</Button>
    </>
  );

  // useEffect(() => {
  //   getUser(userFirebaseKey).then((userObj) => setUsername(userObj));
  // }, []);

  const timestamp = new Date();
  const timeValue = timestamp.valueOf();

  return (
    <>
      <CardBody body="true" className="card text-center">
        <CardTitle tag="h5" type="text">{message}</CardTitle>
        <CardText type="number">Date: {timeValue}</CardText>
        {/* <Timestamp relative date={Date} /> */}
        <CardText type="text">Player: {user.fullName}</CardText>
        {loggedUserKey === userFirebaseKey ? userCanEdit() : userReactions()}
        {/* <Button color="danger" onClick={() => handleClick('delete')}>Delete Message</Button>
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
            date={Date}
            uid={uid}
            // userFirebaseKey={userFirebaseKey}
            setMessages={setMessages}
          />
        } */}
      </CardBody>
    </>
  );
};

MessageCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  message: PropTypes.string,
  timeStamp: PropTypes.any,
  // timestamp: PropTypes.any,
  // date: PropTypes.any,
  uid: PropTypes.string,
  userFirebaseKey: PropTypes.string,
  loggedUserKey: PropTypes.string,
  setMessages: PropTypes.func
};

export default MessageCard;
