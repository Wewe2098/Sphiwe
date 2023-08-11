import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
   return (
    <div className='wrap-content'>
      <div className='container'>
        <Routes>
          <Route exact path="/" Component={Home} />
         </Routes>
      </div>
    </div>
   );
}
export default App;