import { useState,useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    if(token){
      navigate("/");
    }
  }, []);

  const updateAuthStatus = (status) =>{
    setIsAuthenticated(status);
  }

  const showAlert = (msg,type)=>{
    setAlert({
      message:msg,
      type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} updateAuthStatus={updateAuthStatus}/>
      <div className="extra">
        </div>
        <div className="alertspace">
      <Alert alert={alert}/>
      </div>
      <div className="container">
      <Routes>
        <Route exact path="/" element={isAuthenticated?<Home showAlert={showAlert}/>:<Navigate to="/login"/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login"   element={<Login showAlert={showAlert} updateAuthStatus={updateAuthStatus}/>} />
        <Route exact path="/signup"  element={<Signup showAlert={showAlert} updateAuthStatus={updateAuthStatus}/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
 {/* <Home/> */}
      