import type { CollectionHome, IDCollection, Jewelry } from '../JewelrysPage/type';

export const initCollectionHomeFetch = async (): Promise<CollectionHome[]> => {
  const res = await fetch('/api/collections');
  const data = await res.json();
  return data.collections;
};

export const initSpecificCollectionFetch = async (collectionID:IDCollection): Promise<Jewelry[]> => {
  const res = await fetch(`/api/collections/${collectionID}`);
  const data = await res.json();
  console.log(await data, '------------')
  return data.jewelrysSpecificCollection;
};


export default initCollectionHomeFetch;
