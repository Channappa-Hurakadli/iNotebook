import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="extra">
        </div>
      <Alert/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
 {/* <Home/> */}
      