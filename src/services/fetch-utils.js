import { client, checkError } from './client';

export async function getRestaurants() {
  const response = await client
    .from('restaurants')
    .select('*');
  
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