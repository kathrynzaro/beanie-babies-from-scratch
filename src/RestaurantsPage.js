import { useEffect, useState } from 'react';
import './App.css';
import RestaurantsList from './RestaurantsList';
import { getRestaurants } from './services/fetch-utils';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 30;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const data = await getRestaurants(from, to);

      setRestaurants(data);
    }
  
    fetch();
  }, [page]);

  return (
    <div>
      <h1>Hungry?</h1>
      <h2>page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1}onClick={() => setPage(page - 1)}>&larr;</button>
        <button onClick={() => setPage(page + 1)}>&rarr;</button>
      </div>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default App;

{/* <Item>Page : tracks items and page state correctly, refetching whenever the page state changes, passes props correctly to <Item>List	 */}