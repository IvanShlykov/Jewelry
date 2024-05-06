export type Jewelry = {
  id: number;
  name: string;
  price: number;
  description: string;
  collectionId: number;
  typeId: number;
  isSpecial: boolean;
  isNew: boolean;
  discountPrice: number;
  metallId: number;
};

export type PhotoCol = {
  id: number;
  collectionID: number;
  url: string
}

export type CollectionHome= {
  id: number;
  name: string;
  photo: string;
  ColPhotos: PhotoCol[]
};

export type State = {
  jewelrys: Jewelry[];
  collections: CollectionHome[];
  error: undefined | string;
};
