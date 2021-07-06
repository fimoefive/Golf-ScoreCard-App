import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MessageCard from '../components/MessageCard';
import MessageForm from '../forms/MessageForm';

function Messages({
  user,
  messages,
  setMessages,
  loggedUser
}) {
  const [showAddMessage, setAddMessage] = useState(false);

  const handleClick = () => {
    setAddMessage((prevState) => !prevState);
  };

  return (
    <>
      <div className="message-container">
        <div>
          {!showAddMessage
            ? <Button className="addMessageBtn" color="primary" user={user} onClick={handleClick}>ADD Message</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <MessageForm
                formTitle={'New Message'}
                setMessages={setMessages}
                user={user}
                userFirebaseKey={loggedUser.firebaseKey}
              />
            </div>
          }
        </div>
        {messages.map((messageInfo) => (
          <MessageCard className="messageCard"
            key={messageInfo.firebaseKey}
            firebaseKey={messageInfo.firebaseKey}
            message={messageInfo.message}
            timeStamp={messageInfo.timeStamp}
            timestamp={messageInfo.timestamp}
            date={Date()}
            uid={messageInfo.uid}
            user={user}
            userFirebaseKey={messageInfo.userFirebaseKey}
            // loggedUserKey={loggedUser.firebaseKey}
            loggedUserKey={user.userFirebaseKey}
            setMessages={setMessages}
          />
        ))}
      </div>
    </>
  );
}

Messages.propTypes = {
  user: PropTypes.any,
  loggedUser: PropTypes.object,
  messages: PropTypes.array,
  setMessages: PropTypes.func
};

export default Messages;
