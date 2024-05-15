// import type { Jewelry, CollectionHome } from './type';

import type { CollectionHome } from "../JewelrysPage/type";
import type { NewJewelry } from "./type";

export const initNewJewelrysFetch = async (): Promise<NewJewelry[]> => {
  const res = await fetch('/api/new');
  const data = await res.json();
  return data.newJewelrys;
};

export const initCollectionHomeFetch = async (): Promise<CollectionHome[]> => {
  const res = await fetch('/api/collections');
  const data = await res.json();
  return data.collections;
};

export default initNewJewelrysFetch;
