import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import praise from './images/PraiseTheSun.jpg'
import praise2 from './images/praiseit.png'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div id="container-wrap">
            <Sidebar/>
            <div id="container-main">
              <header className="App-header">
                <img src={praise2} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload, PLEASE.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
