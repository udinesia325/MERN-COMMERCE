import './App.css';
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Utama from "./Component/Utama/Utama";
import Login from "./Component/Login/Login";
import Cart from "./Component/Cart/Cart";
import Signup from './Component/Signup/Signup';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {loginSuccess} from "./redux/actions/loginActions"
import CarouselHotSale from "./Component/carouselHotSale/carouselHotSale.jsx"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <CarouselHotSale />
      <Routes>
      <Route path="/" element={<Utama />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/Cart" element={<Cart />} exact />
     
      </Routes>
   {/*   <Utama />
      <Login /> */}
      {/*<Signup />*/}
     {/* <Login />*/}
     </Router>
    </div>
  );
}

export default App;
