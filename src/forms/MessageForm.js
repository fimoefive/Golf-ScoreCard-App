// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   Button, Form,
//   FormGroup, Label, Input
// } from 'reactstrap';
// import { useHistory } from 'react-router-dom';
// import { addMessage, updateMessage } from '../helpers/data/messageData';

// const MessageForm = ({
//   formTitle,
//   firebaseKey,
//   message,
//   timeStamp,
//   userFirebaseKey,
//   setMessages
// }) => {
//   const [mess, setMessage] = useState({
//     message: message || '',
//     timeStamp: timeStamp || 'just now',
//     userFirebaseKey: userFirebaseKey || null,
//     firebaseKey: firebaseKey || null
//     // uid: uid || user.uid
//   });

//   const handleInputChange = (e) => {
//     setMessage((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (mess.firebaseKey) {
//       updateMessage(mess).then((messageArray) => setMessages(messageArray));
//     } else {
//       addMessage(mess).then((response) => {
//         setMessages(response);
//         history.push('/messages');
//       });

//       // Clears Input Fields
//       setMessage({
//         message: '',
//         timeStamp: '',
//         firebaseKey: null
//       });
//     }
//   };

//   return (
//     <>
//       <div className='message-form'>
//         <Form
//           id='addMessageForm'
//           autoComplete='off'
//           onSubmit={handleSubmit}
//         >
//           <h2>{formTitle}</h2>
//           <FormGroup>
//             <Label htmlFor="message">Message: </Label>
//             <Input
//               name='message'
//               id='message'
//               typmessage'
//               placeholder='Enter Message'
//               value={mess.value}
//               onChange={handleInputChange}
//             />
//           </FormGroup>

//           {/* <FormGroup>
//             <Label htmlFor="timeStamp">Date: </Label>
//             <Input
//               name='timeStamp'
//               id='timeStamp'
//               value={mess.timeStamp}
//               type='text'
//               placeholder='Enter Date'
//               onChange={handleInputChange}
//             />
//           </FormGroup> */}

//           <div>
//             <Button className="messageSubmit" color="success" type='submit'>Submit</Button>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };

// MessageForm.propTypes = {
//   formTitle: PropTypes.string.isRequired,
//   // user: PropTypes.any,
//   firebaseKey: PropTypes.string,
//   message: PropTypes.string,
//   timeStamp: PropTypes.string,
//   // uid: PropTypes.string,
//   setMessages: PropTypes.func.isRequired,
//   userFirebaseKey: PropTypes.string
// };

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { addMessage, updateMessage } from '../helpers/data/messageData';

function MessageForm({
  formTitle, user, setMessages, message, firebaseKey, timeStamp, userID, uid
}) {
  const [newMessage, setNewMessage] = useState({
    message: message || '',
    timeStamp: timeStamp || 'just now',
    userID,
    firebaseKey: firebaseKey || null,
    uid: uid || null
  });

  const handleInputChange = (e) => {
    setNewMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.firebaseKey) {
      updateMessage(newMessage, user.uid).then(setMessages);
    } else {
      addMessage(newMessage, user.uid).then((messageArray) => setMessages(messageArray));
      history.push('/messages');
    }
  };

  return (
    <div className="message-form">
      <form className='mt-3' id='add-player-form' autoComplete='off' onSubmit={handleSubmit}>
        <label>{formTitle}</label>
        <input
          className='ml-2'
          name='message'
          type='text'
          placeholder='message'
          value={newMessage.value}
          onChange={handleInputChange} />
        <br />
        <Button color='primary' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  setMessages: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  user: PropTypes.any,
  message: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  timeStamp: PropTypes.string,
  userID: PropTypes.string
};

export default MessageForm;
