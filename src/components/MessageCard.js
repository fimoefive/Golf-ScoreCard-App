// import firebase from 'firebase/app';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { deleteMessage, getMessages } from '../helpers/data/messageData';
import MessageForm from '../forms/MessageForm';
// import { getUsers } from '../helpers/data/userData';
import '../styles/messages.scss';

const MessageCard = ({
  user,
  firebaseKey,
  message,
  timeStamp,
  // timestamp,
  // date,
  uid,
  setMessages,
  userFirebaseKey,
}) => {
  const [editing, setEditing] = useState(false);
  // const [username, setUsername] = useState({});

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteMessage(firebaseKey, user.uid)
          .then(setMessages)
          .then(() => getMessages(user.uid))
          .then(setMessages);
        break;
      case 'edit':
        console.warn(user);
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  // useEffect(() => {
  //   getUsers(userFirebaseKey).then((userInfoObj) => setUsername(userInfoObj));
  // }, []);

  // const getLoggedInUser = () => firebase.auth().currentUser?.userFirebaseKey;
  // const isUserLoggedIn = firebase.auth().currentUser;

  const timestamp = new Date().toISOString().slice(0, 10);
  // const timeValue = timestamp.valueOf();

  return (
    <>
      <div className="messageCard">
        <CardBody body="true" className="card text-center">
          <CardTitle tag="h5" type="text">{message}</CardTitle>
          <CardText type="number">Date: {timestamp}</CardText>
          {/* <CardText type="text">Player: {username.fullName}</CardText> */}
          {/* <Timestamp relative date={Date} /> */}
          {/* <CardText type="text">Player: {user.fullName}</CardText> */}
          {/* {loggedUserKey === userFirebaseKey ? userCanEdit() : userReactions()} */}
          {/* {isUserLoggedIn ? '' : */}
          {user
            ? <Button color='info' user={user} onClick={() => handleClick('edit')}>
              {editing ? 'Close' : 'Edit Message'}
            </Button> : ''}
          {editing && <MessageForm
            formTitle='Edit Message'
            user={user}
            firebaseKey={firebaseKey}
            message={message}
            timeStamp={timeStamp}
            date={Date}
            uid={uid}
            setMessages={setMessages}
            userFirebaseKey={userFirebaseKey}
          />
          }
          {user
            ? <Button color='danger' user={user} onClick={() => handleClick('delete')}>Delete</Button>
            : ''}

        </CardBody>
      </div>
    </>
  );
};

MessageCard.propTypes = {
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
  // timestamp: PropTypes.any,
  // date: PropTypes.any,
  uid: PropTypes.string,
  setMessages: PropTypes.func,
  userFirebaseKey: PropTypes.string,
  loggedUserKey: PropTypes.string,

};

// function MessageCard({
//   user,
//   message,
//   timeStamp,
//   firebaseKey,
//   uid,
//   setMessages,
//   userID,
//   // loggedUserKey
// }) {
//   const [editing, setEditing] = useState(false);
//   const [username, setUsername] = useState({});

//   const handleClick = (type) => {
//     switch (type) {
//       case 'edit':
//         setEditing((prevState) => !prevState);
//         break;
//       case 'delete':
//         deleteMessage(firebaseKey).then(setMessages);
//         break;
//       default: console.warn('nothing selected');
//     }
//   };

//   const userCanEdit = () => (
//     <>
//       <Button color='info' onClick={() => handleClick('edit')}>
//         {editing ? 'Close' : 'Edit'}
//       </Button>
//       {
//         editing && <MessageForm
//           user={user}
//           setMessages={setMessages}
//           firebaseKey={firebaseKey}
//           uid={uid}
//           timeStamp={timeStamp}
//           message={message}
//           userID={userID}
//           formTitle={'Edit Message'}
//         />
//       }
//       <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
//     </>
//   );

//   const userReactions = () => (
//     <>
//       <Button className="likeBtn">like</Button>
//       <Button className="dislikeBtn">dislike</Button>
//     </>
//   );

//   useEffect(() => {
//     getUsers(userID).then((userObj) => setUsername(userObj));
//     // getUser(uid).then((userObj) => setUsername(userObj));
//   }, []);

//   return (
//     <div className="messageCard">
//       <Card body className="message-center">
//         <CardTitle tag="h3">{username.fullName}</CardTitle>
//         <CardText>{message}</CardText>
//         <CardText>{timeStamp}</CardText>
//         {user === userID ? userCanEdit() : userReactions()}
//       </Card>
//     </div>
//   );
// }

// MessageCard.propTypes = {
//   user: PropTypes.any,
//   message: PropTypes.string.isRequired,
//   timeStamp: PropTypes.any.isRequired,
//   firebaseKey: PropTypes.string.isRequired,
//   uid: PropTypes.string.isRequired,
//   setMessages: PropTypes.func.isRequired,
//   userID: PropTypes.string.isRequired,
//   // loggedUserKey: PropTypes.string
// };

export default MessageCard;
