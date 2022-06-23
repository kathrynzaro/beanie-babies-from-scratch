import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurantById } from './services/fetch-utils';

export default function RestaurantDetail() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await getRestaurantById(params.id);
      setRestaurant(data);
    }
    fetch();
  }, [params.id]);

  return (
    <div>
      <Link to='/'>Home</Link>
      <div className='restaurant-detail'>
        <p>{restaurant.name}</p>
        <p>{restaurant.street_address}</p>
        <p>{restaurant.location}</p>
        <p>{restaurant.type}</p>
        <p>{restaurant.reviews}</p>
        <p>{restaurant.price_range}</p>
        <p>{restaurant.number}</p>
      </div>
    </div>
  );
}

{/* <Item>s Detail : uses the correct react-router-dom hook to get the id from the URL, then uses that id to fetch the correct item	 */}
