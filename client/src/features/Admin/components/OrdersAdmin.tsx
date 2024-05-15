import React, { memo } from 'react';
import type { Order } from '../type';
import OrderUno from './OrderUno';

type Props = {
  orders: Order[];
  open: boolean;
};

function OrdersAdmin({ orders, open }: Props): JSX.Element {
  return orders.length > 0 ? (
    <table className='table'>
      <thead>
        <tr>
          <th>№</th>
          <th>№ заказа</th>
          <th>Имя пользователя</th>
          <th>Телефон</th>
          <th>Почта</th>
          <th>Украшение</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th>Сумма</th>
          <th>Итого</th>
          {open && <th>Закрыть заказ</th>}
        </tr>
      </thead>
      <tbody>
        {orders.map((el, i) => (
          <OrderUno order={el} i={i} key={el.id} open={open}/>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Нет открытых заказов</div>
  );
}

export default memo(OrdersAdmin);
