import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAyGW0qiUcqZ8bvi8tvOsJl3PrxYKanvQI",
  authDomain: "healthchain-5f0ec.firebaseapp.com",
  databaseURL: "https://healthchain-5f0ec.firebaseio.com",
  projectId: "healthchain-5f0ec",
  storageBucket: "",
  messagingSenderId: "291316078710",
  appId: "1:291316078710:web:6244144765187da4"
};

firebase.initializeApp(config);

export default firebase;