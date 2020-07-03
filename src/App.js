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
          Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </header>

    </div>
  );
}

export default App;
