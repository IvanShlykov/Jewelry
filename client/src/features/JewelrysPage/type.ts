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

export type State = {
  jewelrys: Jewelry[];
  error: undefined | string;
};
