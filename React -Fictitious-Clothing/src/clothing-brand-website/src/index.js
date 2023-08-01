// src/components/Header.js

import React from 'react';

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <img src="/path/to/logo.png" alt="Logo" />
      <h1>Company Name</h1>
      {isLoggedIn ? (
        <p>Welcome to our website!</p>
      ) : (
        <p>Please sign in to access more features.</p>
      )}
    </header>
  );
};
