import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { initJewelrys } from '../adminSlice';
import JewelryUno from './JewelryUno';
import '../jewelryPage.css';
import AddJewelryModalAdmin from './AddJewelryModalAdmin';

function JewelryPageAdmin(): JSX.Element {
  const dispatch = useAppDispatch();
  const jewelrys = useSelector((store: RootState) => store.adminState.jewelrys);

  const [state, setState] = useState(false);

  useEffect(() => {
    dispatch(initJewelrys()).catch(console.log);
  }, []);


  return (
    <div>
      <div>
        <div>Добавить украшение <button className='btnAdmin' type='button' onClick={()=> setState(true)}>Добавить</button></div>
        <AddJewelryModalAdmin state={state} setState={setState}/>
      </div>
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
