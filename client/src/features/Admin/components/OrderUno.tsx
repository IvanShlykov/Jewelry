import React, { memo, useState } from 'react';
import type { IDCollection, Order } from '../type';
import { useAppDispatch } from '../../../store/store';
import ModalWindow from './ModalWindow';
import { closeOrderAllSlice } from '../adminSlice';

type Props = {
  order: Order;
  i: number;
  open: boolean;
};

function OrderUno({ order, i, open }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  const closeOrder = (id: IDCollection): void => {
    dispatch(closeOrderAllSlice(id)).catch(console.log);
  };

  return (
    <>
      <tr>
        <td rowSpan={order.OrderItems.length}>{i + 1}.</td>
        <td rowSpan={order.OrderItems.length }>{order.id}</td>
        <td rowSpan={order.OrderItems.length }>{order.User?.name}</td>
        <td rowSpan={order.OrderItems.length }>{order.User?.phone}</td>
        <td rowSpan={order.OrderItems.length }>{order.User?.email}</td>
        <td>{order.OrderItems[0].Jewelry.name}</td>
        <td>{order.OrderItems[0].count}</td>
        <td>{order.OrderItems[0].price}</td>
        <td>{order.OrderItems[0].price * order.OrderItems[0].count}</td>
        <td rowSpan={order.OrderItems.length }>
        {order.OrderItems.reduce((acc, a) => acc + a.price * a.count, 0)}
      </td>
      {open && (
        <td rowSpan={order.OrderItems.length }>
          <ModalWindow deleteItem={closeOrder} modal={modal} setModal={setModal} id={order.id} />
          <button type="button" onClick={() => setModal(true)}>
          Подтвердить
          </button>
        </td>
      )}
      </tr>
      {order.OrderItems.slice(1).map((el) => (
        <tr key={el.id}>
          <td>{el.Jewelry.name}</td>
          <td>{el.count}</td>
          <td>{el.price}</td>
          <td>{el.price * el.count}</td>
        </tr>
      ))}

    
    </>
  );
}

export default memo(OrderUno);
