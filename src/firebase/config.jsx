import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQRPZxCh-VdLeh3wVtu50ZGTuO5YkfdBo",
  authDomain: "miniblog-e0de6.firebaseapp.com",
  projectId: "miniblog-e0de6",
  storageBucket: "miniblog-e0de6.appspot.com",
  messagingSenderId: "142355533900",
  appId: "1:142355533900:web:1ca2055f64dfe807f5a4e9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};