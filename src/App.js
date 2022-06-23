import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetail from './RestaurantDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <RestaurantsPage />
          </Route>
          <Route exact path="/restaurants/:id"> 
            <RestaurantDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// App() : has routes to the ItemPage and ItemDetail components, with appropriate exact path props