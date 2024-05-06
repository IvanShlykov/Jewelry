import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.scss';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchLogOut } from '../Auth/api';

 function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.authSlice);
  const logOut = (): void => {
    fetchLogOut()
      .then((data) => data.message === 'success' && dispatch({ type: 'auth/logOut' }))
      .catch(console.log);
  };
  return (
    <>
      <div className="nav__container">
        <ul className="nav__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/authorization">Authorization</NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink to="/signIn">Sign-in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign-up</NavLink>
              </li>
            </>
          ) : (
            // <li>
            //   <NavLink onClick={logOut} to="/">
            //     logout{' '}
            //   </NavLink>
            // </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;