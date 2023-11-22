import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom"
import Video from './Components/Video';
import { Home } from './Pages/Home';
import { Types } from './Pages/Types';
import { Benefits } from './Pages/Benefits';
import { History } from './Pages/History';
import { Navbar } from './Components/Navbar';


function App() {
  return (
  <div>

  <Router>
    <nav>
      <Navbar/>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/types" element={<Types/>}/>
      <Route path="/benefits" element={<Benefits/>}/>
    </Routes>

  </Router>
{/* 
  <Video/> */}
</div>
  )
}

export default App;
