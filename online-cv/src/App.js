import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
   return (
    <div className='wrap-content'>
      <div className='container'>
        <Router>
          <Route exact path="/" Component={Home} />
         </Router>
      </div>
    </div>
   );
}
export default App;