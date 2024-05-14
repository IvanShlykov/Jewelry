import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

function BasketPage(): JSX.Element {
  const basket = useSelector((store: RootState) => store.basketState.orderItems);
  

  return (basket ? 
    
  <div>Ваша корзина</div> 
  
  
  
  : <div>Корзина пуста</div>);
}

export default BasketPage;
