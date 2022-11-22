import React, { useState } from 'react';
import { 
  useNavigate, 
  Navigate, 
  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';

import SideBar from './components/SideBar';
import Login from './components/Login';
import Trade from './components/Trade';

function App() {
  const [profile, setProfile] = useState("")

  const login = name => {
    setProfile(name)
  }
  
  return (
    <Router>
        <Container>
          <br/>
          <SideBar username={profile} />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" exact element={<Login changeName={login} />} />
            <Route path="/shop/:profile" exact element={<Trade />} />
          </Routes>        
        </Container>
    </Router>
  );
}

export default App;
