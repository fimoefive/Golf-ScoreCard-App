import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUser = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => {
          getUser().then((usersArray) => resolve(usersArray));
        });
    }).catch((error) => reject(error));
});

const getUserUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export { getUser, createUser, getUserUid };
