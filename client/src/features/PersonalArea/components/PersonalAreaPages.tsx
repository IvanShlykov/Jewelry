import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initBasket } from '../PersonalAreaSlice';
import ChangeUser from './ChangeUser';
import OrderItemElem from './OrderItemElem';


function PersonalAreaPages() :JSX.Element {
  const [showAppdateUser, setshowAppdateUser] = useState(false);
  const [showOrderStory, setshowOrderStory] = useState(false);
  const users =  useSelector((store: RootState) => store.authState.user);
  console.log(users?.email);
  
useEffect(()=>{},[])
 
  const handleButtonClick = ():void => {
    setshowAppdateUser(true);
};
const handleButtonOrderStory = ():void => {
  setshowOrderStory(true);
};
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(initBasket()).catch(console.log)
    }, [])
    const baskets = useSelector((store: RootState) => store.userState.orderItems);
   
    

  
  console.log(baskets)
  return (
    <div>
       <h3>Добро пожаловать в ваш личный кабинет</h3>
       <div>{users?.name }</div>
    <div>{ users?.email}</div>
    <div>{ users?.phone}</div>
    <div>
    <button type='button' className='changeUser' onClick={handleButtonClick}>
                Изменить данные пользователя 
            </button>
            {showAppdateUser && <ChangeUser/> }
            </div>
            <div>
    <button type='button' className='changeUser' onClick={handleButtonOrderStory}>
               gjrf;b bcnjh
            </button>
            {showOrderStory && baskets.map((el) => (
                <OrderItemElem key={el.id} orderItem={el} />
              ))} 
            </div>
       </div>
  )
}

export default PersonalAreaPages