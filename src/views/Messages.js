// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
import MessageCard from '../components/MessageCard';
import MessageForm from '../forms/MessageForm';
import '../styles/messages.scss';

// function Messages({
//   // user,
//   messages,
//   setMessages,
//   loggedInUser
// }) {
// const [showAddMessage, setAddMessage] = useState(false);

// const handleClick = () => {
//   setAddMessage((prevState) => !prevState);
// };

// return (
//   <>
//     <div className="message-container">
//       <div>
//         {!showAddMessage
//           ? <Button className="addMessageBtn" color="primary" onClick={handleClick}>ADD Message</Button>
//           : <div>
//             <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
//             <MessageForm
//               formTitle={'New Message'}
//               setMessages={setMessages}
//               // user={user}
//               userFirebaseKey={loggedInUser.userFirebaseKey}
//             />
//           </div>
//         }
//       </div>
//       {messages.map((messageInfo) => (
//         <MessageCard className="messageCard"
//           key={messageInfo.firebaseKey}
//           firebaseKey={messageInfo.firebaseKey}
//           message={messageInfo.message}
//           timeStamp={messageInfo.timeStamp}
//           // timestamp={messageInfo.timestamp}
//           // date={Date()}
//           // uid={messageInfo.uid}
//           // user={user}
//           setMessages={setMessages}
//           userFirebaseKey={messageInfo.userFirebaseKey}
//           // loggedUserKey={loggedInUser.firebaseKey}
//           loggedUserKey={loggedInUser.userFirebaseKey}
//         />
//       ))}
//     </div>
//   </>
// );

// Messages.propTypes = {
//   // user: PropTypes.any,
//   messages: PropTypes.array,
//   setMessages: PropTypes.func,
//   loggedInUser: PropTypes.object.isRequired
// };

function Messages({
  user, messages, setMessages,
  // loggedInUser
}) {
  return (
    <div className="message-container">
      <br />
      <MessageForm
        formTitle={'New Message'}
        user={user}
        setMessages={setMessages}
      // userID={loggedInUser.userFirebaseKey}
      />
      {
        messages.map((message) => (
          <MessageCard
            key={message.firebaseKey}
            firebaseKey={message.firebaseKey}
            message={message.message}
            timeStamp={message.timeStamp}
            uid={message.uid}
            user={user}
            setMessages={setMessages}
            userID={message.userID}
          // loggedUserKey={loggedInUser.userFirebaseKey}
          />
        ))
      }
    </div>
  );
}

Messages.propTypes = {
  user: PropTypes.any,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  // loggedInUser: PropTypes.object.isRequired
};

export default Messages;
