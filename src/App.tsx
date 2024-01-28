import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ExerciseDetails } from './container';
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/exercise/:id' Component={ExerciseDetails} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
