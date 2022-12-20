import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";

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
