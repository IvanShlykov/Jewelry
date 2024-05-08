import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { addCollection, initHashtag, initJewelrys } from '../adminSlice';
import JewelryUno from './JewelryUno';
import '../jewelryPage.css';

// type Props = {
//   jewelrys: Jewelry[];
// };

function JewelryPageAdmin(): JSX.Element {
  const dispatch = useAppDispatch();
  const jewelrys = useSelector((store: RootState) => store.adminState.jewelrys);

  const [nameCollection, setNameCollection] = useState('');
  const [img, setImg] = useState<File>();

  useEffect(() => {
    dispatch(initJewelrys()).catch(console.log);

  }, []);

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
      <table className="jewelrysAdmin">
        <thead>
          <tr>
            <th rowSpan={2}>№</th>
            <th rowSpan={2}>Название</th>
            {/* <th>Описание</th> */}
            {/* <th rowSpan={2}>Цена</th> */}
            <th rowSpan={2}>Коллекция</th>
            <th rowSpan={2}>Тип</th>
            <th rowSpan={2}>Новинка</th>
            <th rowSpan={2}>Хэштеги</th>
            <th colSpan={2}>Склад</th>
            <th rowSpan={2}>Металл</th>
            {/* <th rowSpan={2}>Фото</th> */}
            <th>Изменить/</th>
            <th rowSpan={2}>Удалить</th>
          </tr>
          <tr>
            <th>Размер</th>
            <th>Кол-во</th>
            <th>Подробнее</th>
          </tr>
        </thead>
        <tbody>{jewelrys?.map((el, i) => <JewelryUno jewelry={el} i={i} key={el.id} />)}</tbody>
      </table>
    </div>
  );
}

export default memo(JewelryPageAdmin);
