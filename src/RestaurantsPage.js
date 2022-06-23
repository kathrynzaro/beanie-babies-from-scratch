import { useEffect, useState } from 'react';
import './App.css';
import RestaurantsList from './RestaurantsList';
import { getRestaurants } from './services/fetch-utils';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getRestaurants();

      setRestaurants(data);
    }
  
    fetch();
  });

  return (
    <div>
      <h2>Current Page</h2>
      <div className='buttons'>
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default App;

{/* <Item>Page : tracks items and page state correctly, refetching whenever the page state changes, passes props correctly to <Item>List	 */}