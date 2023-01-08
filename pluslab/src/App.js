import React from "react";
import Nav from "./components/Nav";
import NavLogOut from "./components/NavLogOut";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DashBoard from "./pages/DashBoard";
import Coursepage from "./pages/Coursepage";
import Cartpage from "./pages/Cartpage";
import OrderHistory from "./pages/OrderHistory";
import VideoPage from "./pages/VideoPage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Coursepage" element={<Coursepage />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Coursepage/Cartpage" element={<Cartpage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
