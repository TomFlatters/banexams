import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyAYQqpSPHCeY7alfZbXG3zGtUqJMLPxmUk",
    authDomain: "banexams.firebaseapp.com",
    databaseURL: "https://banexams.firebaseio.com",
    projectId: "banexams",
    storageBucket: "banexams.appspot.com",
    messagingSenderId: "606188536550"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

