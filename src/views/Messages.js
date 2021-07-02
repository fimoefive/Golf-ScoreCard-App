import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MessageCard from '../components/MessageCard';
import MessageForm from '../forms/MessageForm';

function Messages({
  user,
  // loggedInUser,
  messages,
  setMessages
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
              // userFirebaseKey={loggedInUser.firebaseKey}
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
            uid={messageInfo.uid}
            user={user}
            // loggedInUser={loggedInUser.firebaseKey}
            setMessages={setMessages}
          />
        ))}
      </div>
    </>
  );
}

Messages.propTypes = {
  user: PropTypes.any,
  // loggedInUser: PropTypes.object,
  messages: PropTypes.array,
  setMessages: PropTypes.func
};

export default Messages;
