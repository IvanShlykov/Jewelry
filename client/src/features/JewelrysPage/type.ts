import type { User } from "../Auth/type";

export type JewStoneAdd = {
  jewelryID: number;
  stoneID: number;
};

export type JewStone = JewStoneAdd & { id: number };

export type State = {
  collections: Collection[];
  colPhotos: ColPhoto[];
  metalls: Metall[];
  jewelrys: Jewelry[];
  types: Type[];
  hashtags: Hashtag[];
  sizes: Size[];
  favorites: Favorite[];
  error: undefined | string;
  searchHashtags: string;
};

export type Favorite = {
  id:number;
  userID: IDUser;
  jewelryID: IDJewelry;
  Jewelry: Jewelry
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

export type JewelryAdd = {
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

export type JewHashtagAdd = {
  jewelryID: number;
  hashtagID: number;
};

export type JewHashtag = JewHashtagAdd & { id: number; Hashtag: Hashtag };

export type HashtagAdd = {
  title: string;
};

export type Hashtag = HashtagAdd & { id: number };

export type Jewelry = JewelryAdd & { id: number };
export type IDJewelryAdd = Jewelry['id'];

export type StockAdd = {
  sizeID: number;
  jewelryID: number;
  count: number;
};

export type Stock = StockAdd & { id: number; Size: Size };

export type StoneAdd = {
  title: string;
};

export type Stone = StoneAdd & { id: number };

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

export type SizeAdd = {
  scale: string;
};

export type Size = SizeAdd & { id: number };

export type StateBasket = {
  orderItems: OrderItem[];
  error: undefined | string;
};

export type OrderItem = {
  id: number;
  jewelryID: string;
  price: number;
  count: number;
  orderID: number;
  sizeID: number;
  Size: Size;
  Jewelry: Jewelry;
  Order: Order;
};

export type Order = {
  id: number;
  userID: number;
  status: string;
};

export type IDUser = User['id'];

