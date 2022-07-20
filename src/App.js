
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Routes>
              <Route exact path="/" element={<News key="general" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} />} />
              <Route exact path="/business" element={<News key="business" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="business"/>}/>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="entertainment"/>}/>
              <Route exact path="/sports" element={<News key="sports" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="sports"/>}/>
              <Route exact path="/science" element={<News key="science" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="science"/>}/>
              <Route exact path="/health" element={<News key="health" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="health"/>}/>
              <Route exact path="/technology" element={<News key="technology" pageSize={18} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}


// Video #26  Timeline 3:00 
