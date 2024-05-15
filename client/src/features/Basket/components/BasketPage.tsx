import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import OrderItemElem from './OrderItemElem';
import '../style.css';
import { buyBasket, delOrder } from '../basketSlice';
import ModalWindowBasket from './ModalWindowBasket';

function BasketPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
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

  const delOrderFunc = (): void => {
    dispatch(delOrder({ orderID: baskets[0].orderID })).catch(console.log);
  };
  const buyBasketFunc = (): void => {
    dispatch(buyBasket({ orderID: baskets[0].orderID })).catch(console.log);
    setModal(true);
  };
  console.log(modal);

  return baskets?.length ? (
    <div className="list">
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
        <button type="button" className="btnBuy" onClick={buyBasketFunc}>
          Купить
        </button>
        <button type="button" className="btnDel" onClick={delOrderFunc}>
          Очистить корзину
        </button>
      </div>
    </div>
  ) : (
    <div className="list">
      <div className="h1Basket HH11">Корзина пуста</div>
      <ModalWindowBasket setModal={setModal} modal={modal}/>
    </div>
  );
}

export default BasketPage;
