import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUser = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/user.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/user.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/user/${response.data.name}.json`, body)
        .then(() => {
          getUser().then((usersArray) => resolve(usersArray));
        });
    }).catch((error) => reject(error));
});

const getUserUid = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/user.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getUser,
  createUser,
  getUserUid
};
