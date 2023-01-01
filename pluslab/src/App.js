import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import Coursepage from "./pages/Coursepage";
import Cartpage from "./pages/Cartpage";
import "./styles/cartpage.css";
import "./styles/style.css";
import "./styles/coursepage.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Coursepage" element={<Coursepage />} />
        <Route path="/Cartpage" element={<Cartpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
