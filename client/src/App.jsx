import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import './input.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Sidebar from './components/Sidebar';
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { EmailAuthProvider, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import Cookies from 'js-cookie';
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Generator from "./pages/Generator";

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("Still logged in");
        setUserData(user);
        navigate('/dashboard', { replace: true });
      } else {
        console.log("Not logged in")
        // const rToken = Cookies.get('nekothserfer');
        // const tokenProvider = Cookies.get('nsprovider');
        // let token = undefined;
        // if (tokenProvider === 'google') {
        //   token = GoogleAuthProvider.credential(rToken.trim());
        // } else if (tokenProvider === 'email') {
        //   token = EmailAuthProvider.credential(rToken.trim().split(" ")[0], rToken.trim().split(" ")[1]);
        // }
        // if (token) {
        //   signInWithCredential(auth, token).then((result) => {
        //     console.log("Logged in:", auth.currentUser.displayName);
        //     setUserData(result.user);
        //     useNavigate('/dashboard', { replace: true });
        //   }).catch((e) => {
        //     console.error("Error Signing In With Credential:", e);
        //   });
        // }
      }
    });
  }, []);

  return (
    <div className={`flex`} data-theme='dark'>
      {location.pathname.trim() !== "/" && location.pathname.trim() !== "/register" && location.pathname.trim() !== "/login" && <Sidebar />}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/generator" element={<Generator />} />
          <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>

  )
}

export default App
