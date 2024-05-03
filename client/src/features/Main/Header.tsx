import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import  { RootState, useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';



function Header():JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.authState.user);
  const logOutHeader = ():void=>{
    dispatch(logout()).catch(console.log)
  }
  return (
    <div>

        <NavLink to='/'>HomePage</NavLink>
        <NavLink to='/new'>Новинки</NavLink>
        <NavLink to='/collections'>Коллекции</NavLink>
        <NavLink to='/specials'>Специальные предложения</NavLink>
        {!user ? (
            <>
            <NavLink to='/registration'>registration</NavLink>
            <NavLink to="/authorization">Authorization</NavLink>
            </>
          ): (
            <li>
              <NavLink onClick={logOutHeader} to="/">
                logout{' '}
              </NavLink>
              
            </li>
          )}

    </div>
  )
}

export default Header