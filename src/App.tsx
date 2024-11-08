import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK0miMKRJoXk6WFvdrZEltL4D7H0RTbxM",
  authDomain: "chatting-chats.firebaseapp.com",
  projectId: "chatting-chats",
  storageBucket: "chatting-chats.firebasestorage.app",
  messagingSenderId: "379144057188",
  appId: "1:379144057188:web:d6d85306cd22859275ca71",
  measurementId: "G-51Y6GQDD9W",
};

function App() {
  const [count, setCount] = useState(0);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log("analytics: ", analytics);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
