import React from 'react';
import MagicBall from './MagicBall';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Magic Ball</h1>
        <h4>The one and only magic ball that gives you honest answers.</h4>
      </header>
      <MagicBall/>
      <footer>
        <div className="copyright">
          <p>Created By Alessia Miccoli</p>    
        </div>
      </footer>
    </div>
  );
}

export default App;
