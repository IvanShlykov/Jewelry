import type { ColPhoto, CollectionHome, Hashtag, Jewelry, Metall, Size, Type } from "../JewelrysPage/type";

export type State = {
  collections: CollectionHome[];
  colPhotos: ColPhoto[];
  metalls: Metall[];
  jewelrysSpecificCollection: Jewelry[];
  types: Type[];
  hashtags: Hashtag[]
  sizes: Size[]
  error: undefined | string;
};


