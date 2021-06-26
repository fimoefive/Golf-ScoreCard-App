// import firebase from 'firebase/auth';
import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getUser, createUser, getUserUid } from '../helpers/data/userData';
// import { getGames } from '../helpers/data/gameData';
import { getHoles } from '../helpers/data/holeData';
import { getMessages } from '../helpers/data/messageData';

import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState({});
  // const [games, setGames] = useState([]);
  const [holes, setHoles] = useState([]);
  const [messages, setMessages] = useState([]);

  // const getLoggedInUser = () => firebase.auth().currentUser?.uid;

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
            // getLoggedInUser(userInfoObj);
            getUser(userInfoObj);
          }
        });
        getHoles(authed.uid).then((gamesArray) => setHoles(gamesArray));
        // getGames(authed.uid).then((playerArray) => setGames(playerArray));
        getMessages(authed.uid).then((messageArray) => setMessages(messageArray));
        setUser(userInfoObj);
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
          // games={games}
          // setGames={setGames}
          holes={holes}
          setHoles={setHoles}
          messages={messages}
          setMessages={setMessages}
        />
      </Router>
    </div>
  );
}

export default App;
