import type {
  CollectionHome,
  Favorite,
  Hashtag,
  IDJewelry,
  IDUser,
  Jewelry,
  Metall,
  OrderItem,
  Type,
} from './type';
import type { IDCollection } from '../Admin/type';

export const initJewelryFetch = async (): Promise<Jewelry[]> => {
  const res = await fetch('/api/admin/jewelrys');
  const data = await res.json();
  return data.jewelrys;
};

export const initCollectionHomeFetch = async (): Promise<CollectionHome[]> => {
  const res = await fetch('/api/collections');
  const data = await res.json();
  return data.collections;
};
export const fetchInitMetalls = async (): Promise<Metall[]> => {
  const res = await fetch('/api/admin/metalls');
  const data = await res.json();
  console.log(data);

  return data.metalls;
};
export const initTypesFetch = async (): Promise<Type[]> => {
  const res = await fetch('/api/admin/types');
  const data = await res.json();
  return data.types;
};
export const initHashtagFetch = async (): Promise<Hashtag[]> => {
  const res = await fetch('/api/admin/hashtags');
  const data = await res.json();
  return data.hashtags;
};

export const initBasketFetch = async (): Promise<OrderItem[]> => {
  const res = await fetch('/api/admin/basket');
  const data = await res.json();
  return data.basket;
};

export const initFavoritesFetch = async (): Promise<Favorite[]> => {
  const res = await fetch('/api/favorites');
  const data = await res.json();
  return data.favorites;
};

export const addBasketFetch = async (obj: {
  jewelryID: number | undefined;
  sizeID: number;
}): Promise<OrderItem[]> => {
  const res = await fetch(`/api/admin/basket/${obj.jewelryID}`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  return data.newBasket;
};

export const addFavoriteFetch = async (obj: {
  userID: IDUser;
  jewelryID: IDJewelry | undefined;
}): Promise<Favorite | undefined> => {
  try {
    console.log(`userID: ${obj.userID}, jewelryID: ${obj.jewelryID}`);
    const res = await fetch(`/api/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    return data.favorite;
  } catch (error) {
    console.error('Ошибка при сохранении избранного в базе данных:', error);
    return undefined;
  }
};

export const removeFavoriteFetch = async (obj: {
  userID: IDUser;
  jewelryID: IDJewelry | undefined;
}): Promise<{
  userID: IDUser;
  jewelryID: IDJewelry | undefined;
}> => {
  await fetch(`/api/favorites`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return obj;
};

export const delOrderItemFetch = async ({
  orderID,
  itemID,
}: {
  orderID: number;
  itemID: number;
}): Promise<IDCollection> => {
  await fetch(`/api/admin/order/${orderID}/items/${itemID}/delete`, { method: 'delete' });
  return itemID;
};

export const delOrderFetch = async ({ orderID }: { orderID: number }): Promise<IDCollection> => {
  await fetch(`/api/admin/order/${orderID}/delete`, { method: 'delete' });
  return orderID;
};

export const buyOrderFetch = async ({ orderID }: { orderID: number }): Promise<IDCollection> => {
  await fetch(`/api/admin/order/${orderID}/buy`, { method: 'PUT' });
  return orderID;
};

export default initJewelryFetch;
