import React, { useEffect, useState } from 'react';
import { 
  Navigate, 
  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';

import SideBar from './components/SideBar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [username, setUsername] = useState("")
  
  useEffect(() => {
    let getName = window.sessionStorage.getItem("username")
    if (getName !== null) {
      setUsername(getName)
    }
  }, [])

  const login = name => {
    setUsername(name)
    window.sessionStorage.setItem("username", username)
  }
  
  return (
    <Router>
        <Container>
          <br/>
          <SideBar username={username} />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" exact element={<Login username={username} changeName={login} />} />
            <Route path="/home" exact element={<Home username={username} />} />
          </Routes>        
        </Container>
    </Router>
  );
}

export default App;
