import type { ColPhoto, Collection, CollectionAdd, IDCollection, Jewelry, Metall, MetallAdd, Type } from './type';

export const initCollectionFetch = async (): Promise<Collection[]> => {
  const res = await fetch('/api/admin/collection');
  const data = await res.json();
  return data.collections;
};

export const addCollectionFetch = async (formData: FormData): Promise<Collection> => {
  const res = await fetch('/api/admin/collection', {
    method: 'post',
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    return data.collection;
  }
  const data = await res.json();
  throw data.message;
};

export const delCollectionFetch = async (id: IDCollection): Promise<IDCollection> => {
  const res = await fetch(`/api/admin/collection/${id}`, { method: 'DELETE' });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw data.message;
};

export const changeCollectionFetch = async (
  formData: FormData,
  id: IDCollection,
): Promise<Collection> => {
  const res = await fetch(`/api/admin/collection/${id}`, {
    method: 'PUT',
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    return data.collection;
  }
  const data = await res.json();
  throw data.message;
};
// ColPhoto
export const initColPhotosFetch = async (): Promise<ColPhoto[]> => {
  const res = await fetch('/api/admin/colphotos');
  const data = await res.json();
  return data.colPhotos;
};

export const addColPhotoFetch = async (formData: FormData): Promise<ColPhoto> => {
  const res = await fetch('/api/admin/colPhoto', {
    method: 'post',
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    return data.colPhoto;
  }
  const data = await res.json();
  throw data.message;
};

export const delColPhotoFetch = async (id: IDCollection): Promise<IDCollection> => {
  const res = await fetch(`/api/admin/colPhoto/${id}`, { method: 'DELETE' });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw data.message;
};

// Metalls
export const initMetallsFetch = async (): Promise<Metall[]> => {
  const res = await fetch('/api/admin/metalls');
  const data = await res.json();
  return data.metalls;
};

export const addMetallFetch = async (obj: MetallAdd): Promise<Metall> => {
  const res = await fetch('/api/admin/metall', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (res.ok) {
    const data = await res.json();
    return data.metall;
  }
  const data = await res.json();
  throw data.message;
};

export const delMetallFetch = async (id: IDCollection): Promise<IDCollection> => {
  const res = await fetch(`/api/admin/metall/${id}`, { method: 'DELETE' });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw data.message;
};

export const changeMetallFetch = async (obj: Metall): Promise<Metall> => {
  const res = await fetch(`/api/admin/metall/${obj.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (res.ok) {
    const data = await res.json();
    return data.metall;
  }
  const data = await res.json();
  throw data.message;
};

// Jewelry
export const initJewelrysFetch = async (): Promise<Jewelry[]> => {
  const res = await fetch('/api/admin/jewelrys');
  const data = await res.json();
  return data.jewelrys;
};


export const initTypesFetch = async (): Promise<Type[]> => {
  const res = await fetch('/api/admin/types');
  const data = await res.json();
  return data.types;
};