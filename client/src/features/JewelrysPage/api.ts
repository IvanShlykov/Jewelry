import type { Jewelry } from './type';

export const initJewelryFetch = async (): Promise<Jewelry[]> => {
  const res = await fetch('/api/jewelry');
  const data = await res.json();
  return data.jewelrys;
};

export default initJewelryFetch;
