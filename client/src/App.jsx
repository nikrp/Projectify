import { Routes, Route, useLocation } from "react-router-dom"
import './input.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Sidebar from './components/Sidebar';

function App() {
  const location = useLocation();

  return (
    <div className={`flex`} data-theme='dark'>
      {location.pathname.trim() !== "/" && <Sidebar />}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>

  )
}

export default App
