import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBqMDCZN8Ng1DFODyS7QLo77jxtMdym3NM",
    authDomain: "imperium-galactica.firebaseapp.com",
    databaseURL: "https://imperium-galactica.firebaseio.com",
    projectId: "imperium-galactica",
    storageBucket: "imperium-galactica.appspot.com",
    messagingSenderId: "907289325841",
    appId: "1:907289325841:web:0d80e8c49a69a90ec55cb0",
    measurementId: "G-FFD5SNEK4P"
};

const fire = firebase.initializeApp(config)
export default fire;