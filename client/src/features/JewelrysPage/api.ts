import type { CollectionHome, Hashtag, Jewelry, Metall, Type } from './type';

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
export const fetchInitMetalls = async (): Promise<Metall[]> => {
  const res = await fetch('/api/admin/metalls');
  const data = await res.json();
  console.log(data);
  
  return data.metalls;
};
export const initTypesFetch = async (): Promise<Type[]> => {
  const res = await fetch('/api/admin/types');
  const data = await res.json();
  return data.types;
};
export const initHashtagFetch = async (): Promise<Hashtag[]> => {
  const res = await fetch('/api/admin/hashtags');
  const data = await res.json();
  return data.hashtags;
};


export default initJewelryFetch;
