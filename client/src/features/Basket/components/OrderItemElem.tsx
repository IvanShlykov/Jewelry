import React, { memo } from 'react';
import type { OrderItem } from '../../JewelrysPage/type';
import { useAppDispatch } from '../../../store/store';
import { delOrderItem } from '../basketSlice';

function OrderItemElem({ orderItem }: { orderItem: OrderItem }): JSX.Element {
  // const photos = useSelector((store:RootState) => store.)
  const dispatch = useAppDispatch()

  const delOrderItemFunc = ():void => {
    dispatch(delOrderItem({itemID: orderItem.id , orderID: orderItem.orderID})).catch(console.log)
  }
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
          <div className="decsripOrderItem"><button type='button' className='btnAdmin' onClick={delOrderItemFunc}>Удалить</button></div>
        </div>
      </div>
      <div className="borderOrder" />
    </>
  );
}

export default memo(OrderItemElem);
