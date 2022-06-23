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
    <div className='restaurant-data'>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
      <div className='restaurant-detail'>
        <h1>{restaurant.name}</h1>
        <div className='address'>
          <p>{restaurant.street_address}</p>
          <p>{restaurant.location}</p>
        </div>
        <p>{restaurant.type}</p>
        <p>Rating: {restaurant.reviews}</p>
        <p>Price: {restaurant.price_range}</p>
        <p>{restaurant.number}</p>
      </div>
    </div>
  );
}

{/* <Item>s Detail : uses the correct react-router-dom hook to get the id from the URL, then uses that id to fetch the correct item	 */}
