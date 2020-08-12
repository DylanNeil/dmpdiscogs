import React from 'react';
import './App.css';
import Discogs from './discogs.js';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <div class="discogs-wrapper">
          <h1>This is My Record Collection</h1>
          <br></br><br></br>
          <Discogs />
          <br></br>
          
        </div>
      </header>

    </div>
  );
}

export default App;
