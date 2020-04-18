import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBqMDCZN8Ng1DFODyS7QLo77jxtMdym3NM",
    authDomain: "imperium-galactica.firebaseapp.com",
    databaseURL: "https://imperium-galactica.firebaseio.com",
    projectId: "imperium-galactica",
    storageBucket: "imperium-galactica.appspot.com",
    messagingSenderId: "907289325841",
    appId: "1:907289325841:web:6b531a96fb8defaac55cb0",
    measurementId: "G-LMZQTDHS16"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().setting({ timestampsInSnapshots: true })

export default firebase