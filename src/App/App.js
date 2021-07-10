import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getHoles } from '../helpers/data/holeData';
import { getMessages } from '../helpers/data/messageData';
import { createUser, getUser, getUserUid } from '../helpers/data/userData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  // const [loggedInUser, setLoggedUser] = useState({});
  const [holes, setHoles] = useState([]);
  const [messages, setMessages] = useState([]);
  // const isMounted = useRef(false);

  // useEffect(() => {
  //   isMounted.current = true;
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  // const checkUser = (newUser, authed) => {
  //   const checkStatus = Object.values(newUser);
  //   if (checkStatus.length >= 1) {
  //     const userArray = Object.values(newUser);
  //     setLoggedUser(userArray[0]);
  //   } else {
  //     const newUserInfoObj = {
  //       fullName: authed.displayName,
  //       profileImage: authed.photoURL,
  //       role: 'user',
  //       uid: authed.uid,
  //     };
  //     createUser(newUserInfoObj).then((userResponse) => setLoggedUser(userResponse));
  //   }
  // };

  const getLoggedInUser = () => firebase.auth().currentUser?.uid;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          email: authed.email,
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        getUserUid(userInfoObj).then((response) => {
          // getUserUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj).then((resp) => setUser(resp));
            getLoggedInUser(userInfoObj);
            getUser(userInfoObj);
          }
          // isMounted.current = true;
        });
        setUser(userInfoObj);
        getHoles(authed.uid).then((gamesArray) => setHoles(gamesArray));
        // getMessages().then((messageArray) => setMessages(messageArray));
        getMessages().then((response) => setMessages(response));
        // getUserUid(authed.uid).then((singleUser) => checkUser(singleUser, authed));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <h2>GOLF APP</h2>

      <Router>
        <NavBar user={user} />
        <Routes user={user}
          holes={holes}
          setHoles={setHoles}
          messages={messages}
          setMessages={setMessages}
        // loggedInUser={loggedInUser}
        />
      </Router>
    </div>
  );
}

export default App;
