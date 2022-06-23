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
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/beanies/:id"> 
            <RestaurantDetail />
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}