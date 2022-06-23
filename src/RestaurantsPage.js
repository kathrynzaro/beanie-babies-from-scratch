import { useEffect, useState } from 'react';
import './App.css';
import RestaurantsList from './RestaurantsList';
import { getRestaurants } from './services/fetch-utils';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetch() {
      const restaurants = await getRestaurants();

      setRestaurants(restaurants);
    }
  
    fetch();
  });

  return (
    <div>
      <h2>Current Page</h2>
      <div className='buttons'>
        <button></button>
        <button></button>
      </div>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default App;