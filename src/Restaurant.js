import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/restaurants/${restaurant.id}`}>
      <div className='restaurant'>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.location}</p>
      </div>
    </Link>
  );
}


{/* <Item>({ items }) : takes in the correct props and renders Link components to the detail page	 */}