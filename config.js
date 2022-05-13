import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyDMh5PN_B3wHgyKJqkF-vtCQV3teuOvOqQ',
  authDomain: 'e-ride-81f93.firebaseapp.com',
  projectId: 'e-ride-81f93',
  storageBucket: 'e-ride-81f93.appspot.com',
  messagingSenderId: '929022960683',
  appId: '1:929022960683:web:78f738ce91c37e12b0f66e',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
