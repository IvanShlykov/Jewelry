import React, { memo } from 'react';
import type { Application } from '../type';
import ApplicationUno from './ApplicationUno';

type Props = {
  applications: Application[];
  open: boolean;
};

function Applications({ applications, open }: Props): JSX.Element {
  return applications.length > 0 ? (
    <table className='table'>
      <thead>
        <tr>
          <th>№</th>
          <th>Имя пользователя</th>
          <th>Телефон</th>
          <th>Почта</th>
          <th>Фото</th>
          <th>Описание</th>
          {open && <th>Закрыть заказ</th>}
        </tr>
      </thead>
      <tbody>
        {applications.map((el, i) => (
          <ApplicationUno application={el} i={i} key={el.id} open={open}/>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Нет новых заказов</div>
  );
}

export default memo(Applications);
