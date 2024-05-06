import React, { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCollection } from '../adminSlice';
import type { Collection } from '../type';
import CollectionUno from './CollectionUno';

type Props = {
  collections: Collection[];
};

function AddCollection({ collections }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [nameCollection, setNameCollection] = useState('');
  const [img, setImg] = useState<File>();

  const addCollectionForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    if (img) {
      formData.append('photo', img);
    }
    formData.append('name', nameCollection);
    dispatch(addCollection(formData)).catch(console.log);
    setNameCollection('');
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
          type="file"
          placeholder="Фото"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length > 0) setImg(event.target.files[0]);
          }}
        />
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Фото</th>
            <th>Изменить</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {collections.slice(1).map((el, i) => (
            <CollectionUno collection={el} i={i} key={el.id}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(AddCollection);
