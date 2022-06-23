import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className='restaurant'>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.location}</p>
      </div>
    </Link>
  );
}


{/* <Item>({ items }) : takes in the correct props and renders Link components to the detail page	 */}