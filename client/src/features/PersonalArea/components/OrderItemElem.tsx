import React from 'react';
import type { OrderItem } from '../../JewelrysPage/type';

function OrderItemElem({ orderItem }: { orderItem: OrderItem }): JSX.Element {
  
  return (
    <>
      <div className="oredrItemCard">
        <div className="photoOrderItem">
         {orderItem.Jewelry.Photos && <img src={orderItem?.Jewelry?.Photos?.find((_,i) => i === 0)?.url} alt="" />}
        </div>
        <div className="descriptionOrderItemPage">
          <div className="decsripOrderItem NameJewelry">{orderItem?.Jewelry?.name}</div>
          <div className="decsripOrderItem">{orderItem?.Jewelry?.Metall?.name}</div>
          <div className="decsripOrderItem">Размер: {orderItem?.Size?.scale}</div>
          <div className="decsripOrderItem">Цена: {orderItem?.price}</div>
          <div className="decsripOrderItem">Кол-во: {orderItem?.count}шт</div>
          <div className="decsripOrderItem"><button type='button' className='btnAdmin'>Удалить</button></div>
        </div>
      </div>
      <div className="borderOrder" />
    </>
  );
}

export default OrderItemElem;
