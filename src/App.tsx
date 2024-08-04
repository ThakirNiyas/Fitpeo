import React, { ReactElement } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';

function App():ReactElement {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <div className="App">
     <Dashboard />
   </div>
  );
}

export default App;
