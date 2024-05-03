export type CollectionAdd = {
  name: string;
  photo: string;
};

export type Collection = CollectionAdd & {id:'number'}
export type IDCollection = Collection['id']


export type State = {
  collections: Collection[];
  error: undefined | string;
};
