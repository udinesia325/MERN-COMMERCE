import './App.css';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Utama from "./Component/Utama/Utama";
import Login from "./Component/Login/Login";
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
