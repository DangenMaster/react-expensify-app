import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* database.ref().set({
  name: 'Apoorv Gupta',
  age: 27,
  isSingle: true,
  location: {
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    zipcode: 110092
  }
}).then(() => {
  console.log('Data has been set!');
}).catch((e) => {
  console.log('Error:', e);
}); */

/* database
  .ref('location/state')
  .remove()
  .then(() => console.log('state property has been removed!'))
  .catch((e) => console.log('Error:', e)); */