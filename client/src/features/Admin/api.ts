import type { Collection, CollectionAdd, IDCollection } from './type';

export const initCollectionFetch = async (): Promise<Collection[]> => {
  const res = await fetch('/api/admin/collection');
  const data = await res.json();
  return data.collections;
};

export const addCollectionFetch = async (obj: CollectionAdd): Promise<Collection> => {
  const res = await fetch('/api/admin/collection', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (res.ok) {
    const data = await res.json();
    return data.collection;
  }
  const data = await res.json();
  throw data.message;
};

export const delCollectionFetch = async (id:IDCollection): Promise<IDCollection> => {
  const res = await fetch(`/api/admin/collection/${id}`, {method: 'DELETE'});
  const data = await res.json();
  return data.id;
};

