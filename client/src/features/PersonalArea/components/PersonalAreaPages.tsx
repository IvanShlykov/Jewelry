import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch} from '../../../store/store';
import type  {RootState} from '../../../store/store'
import { initOrder } from '../PersonalAreaSlice';
import ChangeUser from './ChangeUser';
import OrderItemElem from './OrderItemElem';

function PersonalAreaPages(): JSX.Element {
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showCloseUpdateUser, setShowCloseUpdateUser] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showCloseOrderHistory, setShowCloseOrderHistory] = useState(false);

  const users = useSelector((store: RootState) => store.authState.user);
  const baskets = useSelector((store: RootState) => store.userState.orderItems);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initOrder()).catch(console.log);
  }, []);

  const handleUpdateUserClick = (): void => {
    setShowUpdateUser(true);
    setShowCloseUpdateUser(true)
  };
  const handlCloseUpdateUserClick = (): void => {
    setShowUpdateUser(false);
    setShowCloseUpdateUser(false)
  };

  const handleOrderStoryClick = (): void => {
    setShowOrderHistory(true);
    setShowCloseOrderHistory(true); // Показываем кнопку закрытия
  };

  const handleCloseOrderStory = (): void => {
    setShowOrderHistory(false);
    setShowCloseOrderHistory(false); // Скрываем кнопку закрытия
  };

  return (
    <div>
      <h3>Добро пожаловать в ваш личный кабинет</h3>
      <div>{users?.name}</div>
      <div>{users?.email}</div>
      <div>{users?.phone}</div>
      <div>
        <button type='button' className='changeUser' onClick={handleUpdateUserClick}>
          Изменить данные пользователя
        </button>
        {showUpdateUser && <ChangeUser />}
        {showCloseUpdateUser && (
          <button type='button' className='closeOrder' onClick={handlCloseUpdateUserClick}>
            Закрыть заказы
          </button>
        )}
      </div>
      <div>
        <button type='button' className='changeUser' onClick={handleOrderStoryClick}>
          Ваши заказы
        </button>
        {showOrderHistory && baskets.map((el) => (
          <OrderItemElem key={el.id} orderItem={el} />
        ))}
        {showCloseOrderHistory && (
          <button type='button' className='closeOrder' onClick={handleCloseOrderStory}>
            Закрыть заказы
          </button>
        )}
      </div>
    </div>
  );
}

export default PersonalAreaPages;