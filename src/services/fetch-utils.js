import { client, checkError } from './client';

export async function getRestaurants(from = 0, to = 30) {
  const response = await client
    .from('restaurants')
    .select('*')
    .range(from, to);
  
  return checkError(response);
}

export async function getRestaurantById(id) {
  const response = await client
    .from('restaurants')
    .select('*')
    .match({ id })
    .single();
  
  return checkError(response);
}