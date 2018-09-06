import Rebase from 're-base';
import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPnh4U7TJoZOFSrSpt40H-U0tPT2PLecY",
  authDomain: "catch-of-the-day-alex-j-r.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alex-j-r.firebaseio.com",
}, 'react-catch-of-the-day-alex-j-r');

const base = Rebase.createClass(firebaseApp.database());

export default base;