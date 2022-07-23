
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_N;

  const [progress, setProgress] = useState(0);


    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#48ff00'
            progress={progress}
          />
          <Routes>
              <Route exact path="/" element={ <News setProgress={setProgress} key="general" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="general" />} />
              <Route exact path="/business" element={ <News setProgress={setProgress} key="business" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="business"/>}/>
              <Route exact path="/entertainment" element={ <News setProgress={setProgress} key="entertainment" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="entertainment"/>}/>
              <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="sports"/>}/>
              <Route exact path="/science" element={ <News setProgress={setProgress} key="science" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="science"/>}/>
              <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="health"/>}/>
              <Route exact path="/technology" element={ <News setProgress={setProgress} key="technology" pageSize={pageSize} contentCountry={"in"} apiKey={apiKey} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;

// Video #35 Start
