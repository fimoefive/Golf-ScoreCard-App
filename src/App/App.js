import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [totals, setTot] = useState(number1 + number2);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  function calculateTotal() {
    setTot(number1 + number2);
    // setTot(event.target.value);
  }

  return (
    <div className='App'>
      <h2>GOLF APP</h2>
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          // onChange={calculateTotal}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          // onChange={calculateTotal}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      {/* <h2 onChange={calculateTotal}>{totals}</h2> */}
      <h2>{totals}</h2>
      <button onClick={calculateTotal}>Add Them!</button>

      <Router>
        <NavBar user={user} />
        <Routes user={user} />
      </Router>
    </div>
  );
}

export default App;
