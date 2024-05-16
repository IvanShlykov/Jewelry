import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import type { RootState } from '../../../store/store';
import { initOrder } from '../PersonalAreaSlice';
import ChangeUser from './ChangeUser';
import OrderItemElem from './OrderItemElem';
import '../style.css';

function PersonalAreaPages(): JSX.Element {
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(true);

  const users = useSelector((store: RootState) => store.authState.user);
  const baskets = useSelector((store: RootState) => store.userState.orderItems);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initOrder()).catch(console.log);
  }, [dispatch]);

  const handleUpdateUserClick = (): void => {
    setShowUpdateUser(true);
  };
  const handlCloseUpdateUserClick = (): void => {
    setShowUpdateUser(false);
  };

  const handleOrderStoryClick = (): void => {
    setShowOrderHistory(!showOrderHistory);
  };

  return (
    <div className="list">
      <div className="HH11 marginH1">Добро пожаловать в ваш личный кабинет</div>

      {showUpdateUser ? (
        <div>
          <ChangeUser handlCloseUpdateUserClick={handlCloseUpdateUserClick}/>
        </div>
      ) : (
        <div className="containerLK">
          <div className="decsLK">имя</div>
          <div>{users?.name}</div>
          <div className="decsLK" >почта</div>
          <div>{users?.email}</div>
          <div className="decsLK">телефон</div>
          <div>
            {users?.phone}
            <button onClick={handleUpdateUserClick} type="button" className="LKbutton">
              Изменить
            </button>
          </div>
        </div>
      )}
      <div>
        <button type="button" className="LKbuttonOrder" onClick={handleOrderStoryClick}>
          {showOrderHistory ? 'Ваши заказы' : 'Закрыть историю'}
        </button>
        {!showOrderHistory &&
          (baskets.length ? (
            baskets
              .filter((el) => el.status !== 'basket')
              .map((el) => (
                <div key={el.id}>
                  <div className="h1Basket ">
                    Заказ №{el.id}, статус -{' '}
                    {el.status === 'onAdmin' ? 'на рассмотрении' : 'подтвержден'}
                  </div>
                  <div>
                    {el.OrderItems.map((le) => (
                      <OrderItemElem key={le.id} orderItem={le} />
                    ))}
                  </div>
                  <div className="itogBasket">
                    Сумма: {el.OrderItems.reduce((a, b) => a + b.count * b.price, 0)}
                  </div>
                </div>
              ))
          ) : (
            <div className='HH11 marginH1'>Нет истории заказов</div>
          ))}
      </div>
    </div>
  );
}

export default PersonalAreaPages;
