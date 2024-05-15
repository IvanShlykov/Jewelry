import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initUser } from '../PersonalAreaSlice';
import ChangeUser from './ChangeUser';


function PersonalAreaPages() :JSX.Element {
  const [showAppdateUser, setshowAppdateUser] = useState(false);

  const users =  useSelector((store: RootState) => store.userState )
  const handleButtonClick = ():void => {
    setshowAppdateUser(true);
};
  
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(initUser()).catch(console.log);
      
    }, [])
  return (
    <div>
       <h3>Добро пожаловать в ваш личный кабинет</h3>
       <div>{users.name}</div>
    <div>{users.email}</div>
    <div>{users.phone}</div>
    <div>{users.password}</div>
    <div>
    <button type='button' className='deleteBook' onClick={handleButtonClick}>
                Изменить данные пользователя 
            </button>
            {showAppdateUser && <ChangeUser/> }
            </div>
       </div>
  )
}

export default PersonalAreaPages