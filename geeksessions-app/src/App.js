import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';


function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hi, GeekSessions! 👏 🤓 🚀
        </h1>
        <p  style={{textAlign:"right"}}>  
          <SocialIcon url="https://twitter.com/zygabonda" /> twitter.com/zygabonda <br></br>
          <SocialIcon url="https://www.linkedin.com/in/brunofelix87/" /> linkedin.com/in/brunofelix87 
        </p>
      </header>
    </div>
  );
}

export default App;
