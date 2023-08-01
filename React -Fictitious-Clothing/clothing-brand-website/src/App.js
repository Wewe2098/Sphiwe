// src/App.js

import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  // Assuming this isLoggedIn state is set in your application's global state management (e.g., Redux, Context API)
  const isLoggedIn = false;

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      {/* Add more components and content for the rest of the website */}
    </div>
  );
}


export default App;


