import type { ColPhoto, Collection, Hashtag, Jewelry, Metall, Size, Type } from "../JewelrysPage/type";

export type NewJewelry = Jewelry & {
  isNew: true;
};

export type State = {
  colPhotos: ColPhoto[],
  metalls: Metall[],
  types: Type[],
  sizes: Size[],
  hashtags: Hashtag[],
  jewelrys: Jewelry[];
  newJewelrys: NewJewelry[];
  collections: Collection[];
  error: undefined | string;
};
