export type State = {
  collections: Collection[];
  colPhotos: ColPhoto[];
  metalls: Metall[];
  jewelrys: Jewelry[];
  types: Jewelry[];
  error: undefined | string;
};

export type CollectionAdd = {
  name: string;
  photo: string;
};

export type Collection = CollectionAdd & { id: 'number' };
export type IDCollection = Collection['id'];

export type ColPhotoAdd = {
  url: string;
  collectionID: IDCollection;
};

export type ColPhoto = ColPhotoAdd & { id: 'number'; Collection: Collection };
export type IDColPhoto = ColPhoto['id'];

export type MetallAdd = {
  name: string;
};

export type Metall = MetallAdd & { id: 'number' };

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

export type Jewelry = JewelryAdd & { id: 'number' };
export type IDJewelryAdd = Jewelry['id'];

export type TypeAdd = {
  name: string;
  photo: string;
};

export type Type = TypeAdd & { id: 'number' };

export type JewHashtagAdd = {
  jewelryID: number;
  hashtagID: number;
};

export type JewHashtag = JewHashtagAdd & { id: 'number', Hashtag: Hashtag };

export type StockAdd = {
  sizeID: number;
  jewelryID: number;
  count: number
};

  export type Stock = StockAdd & { id: 'number', Size: Size  };

export type PhotoAdd = {
  jewelryID: number;
  url: string;
};

export type Photo = PhotoAdd & { id: 'number' };

export type StoneAdd = {
  title: string;
};

export type Stone = StoneAdd & { id: 'number' };


export type JewStoneAdd = {
  jewelryID: number;
  stoneID: number;
};

export type JewStone = JewStoneAdd & { id: 'number' };

export type HashtagAdd = {
  title: string;
};

export type Hashtag = HashtagAdd & { id: 'number' };


export type SizeAdd = {
  scale: string;
};

export type Size = SizeAdd & { id: 'number' };