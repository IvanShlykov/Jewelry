import type { CollectionHome, Jewelry } from './type';

export const initJewelryFetch = async (): Promise<Jewelry[]> => {
  const res = await fetch('/api/admin/jewelrys');
  const data = await res.json();
  return data.jewelrys;
};

export const initCollectionHomeFetch = async (): Promise<CollectionHome[]> => {
  const res = await fetch('/api/collections');
  const data = await res.json();
  return data.collections;
};

export default initJewelryFetch;
