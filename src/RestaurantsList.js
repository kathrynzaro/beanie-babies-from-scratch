import React from 'react';
import Restaurant from './Restaurant';

export default function RestaurantsList({ restaurants }) {
  return (
    <div className='restaurants'>
      {
        restaurants.map((restaurant, i) => {
          return <Restaurant
            {...restaurant}
            key={restaurant.name + i + restaurant.id} restaurant={restaurant} />;
        })
      }  
    </div>
  );
}


{/* <Item>List({ items }) : takes in the correct props and renders an item for each item in the array	 */}