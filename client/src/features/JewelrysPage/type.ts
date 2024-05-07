import type { IDCollection } from '../Admin/type';

export type Jewelry = {
  id: number;
  name: string;
  price: number;
  description: string;
  collectionId: IDCollection;
  typeId: number;
  isSpecial: boolean;
  isNew: boolean;
  discountPrice: number;
  metallId: number;
  Photos: Photo[];
};

export type Photo = {
  id: number;
  jewelryID: number;
  url: string;
};

export type IDType = Type['id'];
export type IDMetall = Metall['id'];
export type IDJewelry = Jewelry['id'];

export type Type = {
  id: number;
  name: string;
  photo: string;
};

export type Metall = {
  id: number;
  name: string;
};

export type PhotoCol = {
  id: number;
  collectionID: number;
  url: string;
};

export type CollectionHome = {
  id: number;
  name: string;
  photo: string;
  ColPhotos: PhotoCol[];
};

export type State = {
  jewelrys: Jewelry[];
  collections: CollectionHome[];
  error: undefined | string;
};
