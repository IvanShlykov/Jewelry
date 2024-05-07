import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';

import ModalWindowAuth from '../Auth/components/ModalWindowAuth';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.authState.user);

  const [check, setCheck] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  const change = (): void => {
    setCheck((prev) => !prev);
  };
  const logOutHeader = (): void => {
    dispatch(logout())
      .then(() => {
        setIsModalOpen(false);
      })
      .catch(console.log);
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

        <li>
          <NavLink to="/application" className="menu-item" onClick={change}>
            Заказать индивидуальное украшение
          </NavLink>
        </li>

      </ul>

      {!user ? (
        <>
          <button type="button" onClick={openModal}>
            Открыть модальное окно
          </button>
          <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />
        </>
      ) : (
        <Link onClick={logOutHeader} to="/">
          Выйти
        </Link>
      )}
    </div>
  );
}

export default Header;
