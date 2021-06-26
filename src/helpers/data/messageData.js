import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages.json`)
    // axios.get(`${dbUrl}/messages.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addMessage = (messageObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/messages.json`, messageObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/messages/${response.data.name}.json`, body)
        .then(() => {
          getMessages(uid).then((messageArray) => resolve(messageArray));
        });
    }).catch((error) => reject(error));
});

const deleteMessage = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/messages/${firebaseKey}.json`)
    .then(() => getMessages(uid).then((messageArray) => resolve(messageArray)))
    .catch((error) => reject(error));
});

const updateMessage = (messageObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/messages/${messageObj.firebaseKey}.json`, messageObj)
    .then(() => getMessages(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getMessages,
  addMessage,
  deleteMessage,
  updateMessage
};
