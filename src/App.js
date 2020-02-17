import React from 'react';
import MagicBall from './MagicBall';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Magic Ball</h1>
        <h2>The one and only magic ball that gives you honest answers.</h2>
      </header>
      <MagicBall/>
      <footer>
        <div className="copyright">
          <p>Created By Alessia Miccoli</p>    
          <p><a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/fantasy"> Fantasy icon</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
