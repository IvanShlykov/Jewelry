import React, { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addColPhoto } from '../adminSlice';
import type { ColPhoto, Collection } from '../type';
import ColPhotoUno from './ColPhotoUno';

type Props = {
  colPhotos: ColPhoto[];
  collections: Collection[];
};

function AddColPhoto({ colPhotos, collections }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [nameCollection, setNameCollection] = useState<number>(2);
  const [img, setImg] = useState<File>();

  const addCollectionForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    if (img) {
      formData.append('photo', img);
    }
    formData.append('collectionID', nameCollection.toString());

    dispatch(addColPhoto(formData)).catch(console.log);
  };

  return (
    <div>
      <div>Фото к коллекции</div>
      <form onSubmit={addCollectionForm}>
        <select onChange={(e) => setNameCollection(Number(e.target.value))}>
          {collections.slice(1).map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
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
            <th>Название коллекции</th>
            <th>Фото</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {colPhotos.map((el, i) => (
            <ColPhotoUno colPhoto={el} i={i} key={el.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(AddColPhoto);
