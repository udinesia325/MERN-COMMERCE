import './App.css';
import React from "react"
import Navbar from "./Component/Navbar/Navbar";
import Utama from "./Component/Utama/Utama";
import Login from "./pages/Login/Login";
import Cart from "./Component/Cart/Cart";
import Signup from './pages/Signup/Signup';
import {BrowserRouter as Router, Routes, Route,Outlet} from "react-router-dom"
import {loginSuccess} from "./redux/actions/loginActions"
import CarouselHotSale from "./Component/carouselHotSale/carouselHotSale.jsx"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Utama />}/>
       <Route path="cart" element={<Cart />}/>
      </Route>
      <Route path="/login" element={<Login />} exact />
      <Route path="/signup" element={<Signup />} exact />
     
      </Routes>
     </Router>
    </div>
  );
}
function Layout(){
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
    )
}
export default App;
