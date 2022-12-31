import React from "react";
import Nav from "./components/Nav";
import NavLogOut from "./components/NavLogOut";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
