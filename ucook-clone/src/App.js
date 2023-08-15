import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Market from './components/Market';
import MealKit from './components/MealKit';
import Frozen from './components/Frozen';
import Wine from './components/Wine';
import WeekendBoxes from './components/WeekendBoxes';
import PartnerWithUs from './components/PartnerWithUs';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealkit" element={<MealKit />} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/market" element={<Market />} />
        <Route path="/weekendboxes" element={<WeekendBoxes />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnerwithus" element={<PartnerWithUs />} />
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
