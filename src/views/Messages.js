import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MessageCard from '../components/HoleCard';
import MessageForm from '../forms/HoleForm';

function Holes({ user }) {
  const [messages, setMessages] = useState([]);
  const [showAddHole, setAddHole] = useState(false);

  const handleClick = () => {
    setAddHole((prevState) => !prevState);
  };

  return (
    <>
      <div className="message-container">
        <div>
          {!showAddHole
            ? <Button className="addMessageBtn" color="primary" user={user} onClick={handleClick}>ADD Message</Button>
            : <div>
              <Button className="closeForm" color="secondary" onClick={handleClick}>CLOSE</Button>
              <MessageForm
                setMessages={setMessages}
                user={user}
              />
            </div>
          }
        </div>
        {messages.map((messageInfo) => (
          <HoleCard className="holeCard"
            key={messageInfo.firebaseKey}
            firebaseKey={messageInfo.firebaseKey}
            message={messageInfo.message}
            timestamp={messageInfo.timestamp}
            uid={messageInfo.uid}
            user={user}
            setMessages={setMessages}
          />
        ))}
      </div>
    </>
  );
}

Holes.propTypes = {
  messages: PropTypes.array,
  setMessages: PropTypes.func,
  user: PropTypes.any
};

export default Holes;
