import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFJ2yaSmfTILqekPTmXlOBNLM9sptTvMw",
    authDomain: "fir-registration-ae178.firebaseapp.com",
    databaseURL: "https://fir-registration-ae178-default-rtdb.firebaseio.com",
    projectId: "fir-registration-ae178",
    storageBucket: "fir-registration-ae178.appspot.com",
    messagingSenderId: "851919958938",
    appId: "1:851919958938:web:45717757dfcdf51c548023"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth
