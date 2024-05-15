export type State = {
  collections: Collection[];
  colPhotos: ColPhoto[];
  metalls: Metall[];
  jewelrys: Jewelry[];
  types: Type[];
  hashtags: Hashtag[];
  sizes: Size[];
  locations: Location[];
  applications: Application[];
  error: undefined | string;
};

export type CollectionAdd = {
  name: string;
  photo: string;
};

export type Collection = CollectionAdd & { id: number };
export type IDCollection = Collection['id'];

export type ColPhotoAdd = {
  url: string;
  collectionID: IDCollection;
};

export type ColPhoto = ColPhotoAdd & { id: number; Collection: Collection };
export type IDColPhoto = ColPhoto['id'];

export type MetallAdd = {
  name: string;
};

export type Metall = MetallAdd & { id: number };

export type Jewelry = {
  id: number;
  name: string;
  price: number;
  description: string;
  collectionID: number;
  typeID: number;
  isSpecial: boolean;
  isNew: boolean;
  discountPrice: number;
  metallID: number;
  Collection: Collection;
  Metall: Metall;
  Type: Type;
  JewHashtags: JewHashtag[];
  Stocks: Stock[];
  Photos: Photo[];
  JewStones: JewStone[];
};
export type JewelryAdd = {
  name: string;
  price: number;
  description: string;
  collectionID: number;
  typeID: number;
  isNew: boolean;
  metallID: number;
};

export type JewelryChange = JewelryAdd & { id: number };

export type JewHashtagAdd = {
  jewelryID: number;
  hashtagID: number;
};

export type JewHashtag = JewHashtagAdd & { id: number; Hashtag: Hashtag };

export type HashtagAdd = {
  title: string;
};

export type Hashtag = HashtagAdd & { id: number };

export type IDJewelryAdd = Jewelry['id'];

export type TypeAdd = {
  name: string;
  photo: string;
};

export type Type = TypeAdd & { id: number };

export type StockAdd = {
  sizeID: number;
  jewelryID: number;
  count: number;
};

export type Stock = StockAdd & { id: number; Size: Size };

export type PhotoAdd = {
  jewelryID: number;
  url: string;
};

export type Photo = PhotoAdd & { id: number };

export type StoneAdd = {
  title: string;
};

export type Stone = StoneAdd & { id: number };

export type JewStoneAdd = {
  jewelryID: number;
  stoneID: number;
};

export type JewStone = JewStoneAdd & { id: number };

export type SizeAdd = {
  scale: string;
};

export type Size = SizeAdd & { id: number };

export type Location = {
  id: number;
  city: string;
  adress: string;
  phone: string;
  time: string;
  img: string;
};

export type LocationAdd = {
  city: string;
  strit: string;
  house: string;
  korp: string;
  phone: string;
  time: string;
}

export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export type Application = {
  id: number;
  description: string;
  status: string;
  photo: string;
  userID: number;
  User: User;
};
