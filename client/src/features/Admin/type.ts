export type State = {
  collections: Collection[];
  colPhotos: ColPhoto[];
  metalls: Metall[]
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


export type MetallAdd = {
  name: string;
};

export type Metall = MetallAdd & {id:'number'}
