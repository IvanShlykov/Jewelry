import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.authState.user);
  const logOutHeader = (): void => {
    dispatch(logout()).catch(console.log);
  };
  console.log(user);
  const [check, setCheck] = useState(false);
  const change = (): void => {
    setCheck((prev) => !prev);
  };

  return (
    <div className="menu">
      <input
        type="checkbox"
        id="burger-checkbox"
        className="burger-checkbox"
        onChange={change}
        checked={check}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="burger-checkbox" className="burger" />
      <ul className="menu-list">
        <li>
          <NavLink to="/" className="menu-item" onClick={change}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/jewelry" className="menu-item" onClick={change}>
            Все украшения
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className="menu-item" onClick={change}>
            Новинки
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" className="menu-item" onClick={change}>
            Коллекции
          </NavLink>
        </li>
        <li>
          <NavLink to="/specials" className="menu-item" onClick={change}>
            Специальные предложения
          </NavLink>
        </li>
      </ul>

      {!user ? (
        <>
          <Link to="/registration">Регистрация</Link>
          <Link to="/authorization">Войти</Link>
        </>
      ) : (
        
          <Link onClick={logOutHeader} to="/">
            Выйти
          </Link>
        
      )}
      {user && user.isAdmin && <NavLink to="/admin">Управление</NavLink>}
    </div>
  );
}

export default Header;
