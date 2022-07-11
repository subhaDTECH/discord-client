import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyChHWrB9lcrSptycjXGYIA6Er6oVJ30hFE",
    authDomain: "discord-mern-clone-997bc.firebaseapp.com",
    projectId: "discord-mern-clone-997bc",
    storageBucket: "discord-mern-clone-997bc.appspot.com",
    messagingSenderId: "1011297271904",
    appId: "1:1011297271904:web:071d18086ecf134d074305"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db