
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#48ff00'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          
          <Routes>
              <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} />} />
              <Route exact path="/business" element={ <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="business"/>}/>
              <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="entertainment"/>}/>
              <Route exact path="/sports" element={ <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="sports"/>}/>
              <Route exact path="/science" element={ <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="science"/>}/>
              <Route exact path="/health" element={ <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="health"/>}/>
              <Route exact path="/technology" element={ <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} contentCountry={"in"} apiKey={"27c2b63304704b13a3268ab268963d6c"} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}


// Video #35 Start
