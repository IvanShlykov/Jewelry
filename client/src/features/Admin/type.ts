export type State = {
  collections: Collection[];
  colPhotos: ColPhoto[];
  error: undefined | string;
};

export type CollectionAdd = {
  name: string;
  photo: string;
};

export type Collection = CollectionAdd & {id:'number'}
export type IDCollection = Collection['id']

export type ColPhotoAdd = {
  url: string;
  collectionID: IDCollection;
};

export type ColPhoto = ColPhotoAdd & {id:'number', Collection:Collection}
export type IDColPhoto = ColPhoto['id']