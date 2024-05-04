import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCollection, initCollections } from '../adminSlice';
import type { Collection } from '../type';

type Props = {
  collections: Collection[];
};

function AddCollection({ collections }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [nameCollection, setNameCollection] = useState('');
  const [photoCollection, setPhotoCollection] = useState('');

  const addCollectionForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addCollection({ name: nameCollection, photo: photoCollection })).catch(console.log);
  };

  return (
    <div>
      <div>Добавить коллекцию</div>
      <form onSubmit={addCollectionForm}>
        <input
          name="name"
          type="text"
          placeholder="Название коллекции"
          value={nameCollection}
          onChange={(e) => setNameCollection(e.target.value)}
        />
        <input
          name="photo"
          type="text"
          placeholder="Фото"
          value={photoCollection}
          onChange={(e) => setPhotoCollection(e.target.value)}
        />
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddCollection;
