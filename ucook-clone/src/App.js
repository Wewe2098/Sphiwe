import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Market from './components/Market';
import MealKids from './components/Meal-Kit';
import Frozen from './components/Frozen';
import Wine from './components/Wine';
import WeekendBoxes from './components/WeekendBoxes';
import PartnerWithUs from './components/PartnerWithUs';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/meal-kids" component={MealKids} />
          <Route path="/frozen" component={Frozen} />
          <Route path="/wine" component={Wine} />
          <Route path="/market" component={Market} />
          <Route path="/weekendboxes" component={WeekendBoxes} />
          <Route path="/about" component={About} />
          <Route path="/partnerwithus" component={PartnerWithUs} />
          <Route render={() => <div>404 Page not found</div>} />
        </Routes>
      </div>
  );
};

export default App;
