import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import OrderItemElem from './OrderItemElem';
import '../style.css';

function BasketPage(): JSX.Element {
  const baskets = useSelector((store: RootState) => store.basketState.orderItems);

  const basketsStock = baskets?.filter((orderItem) =>
    orderItem?.Jewelry?.Stocks?.find(
      (stock) => orderItem.sizeID === stock.sizeID && orderItem.count < stock.count,
    ),
  );
  const basketsNotStock = baskets?.filter(
    (orderItem) =>
      !orderItem?.Jewelry?.Stocks?.find(
        (stock) => orderItem.sizeID === stock.sizeID && orderItem.count < stock.count,
      ),
  );

  return baskets ? (
    <div>
      <div>
        <div className="h1Basket HH11">КОРЗИНА</div>
        <div className="borderOrder2" />

        {basketsStock.length > 0 && (
          <div>
            <div className="h1Basket">Товары в наличии, заказ придет в течении 1-2 дней</div>
            <div>
              {basketsStock.map((el) => (
                <OrderItemElem key={el.id} orderItem={el} />
              ))}
            </div>
          </div>
        )}
        {basketsNotStock.length > 0 && (
          <div>
            <div className="h1Basket">Товары под заказ, придет в течении 7-10 дней</div>
            <div>
              {basketsNotStock.map((el) => (
                <OrderItemElem key={el.id} orderItem={el} />
              ))}
            </div>
          </div>
        )}
        <div className="itogBasket">
          Итого: {baskets?.reduce((acc, a) => acc + a.price * a.count, 0)} руб.
        </div>
        <div className="btnBuy">Купить</div>
        <div className="btnDel">Очистить корзину</div>
      </div>
    </div>
  ) : (
    <div>Корзина пуста</div>
  );
}

export default BasketPage;
