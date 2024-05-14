import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';

import ModalWindowAuth from '../Auth/components/ModalWindowAuth';

import ModalWindowSearch from '../Search/components/ModalWindowSearch';
import SVG from '../SVG/SVG';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.authState.user);

  const [check, setCheck] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false);

  const query = useSelector((store: RootState) => store.search.searchQuery);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModalSearch = (): void => {
    setIsModalSearchOpen(false);
  };
  const openModalSearch = (): void => {
    setIsModalSearchOpen(true);
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
        setCheck((prev) => !prev);
      })
      .catch(console.log);
  };
  const basket = useSelector((store: RootState) => store.basketState.orderItems);
  
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
          <NavLink to="/aboutUs" className="menu-item" onClick={change}>
            О нас
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
        <li>
          <Link className="menu-item" onClick={logOutHeader} to="/">
            Выйти
          </Link>
        </li>
      </ul>
      <div className='dgls'>
        <NavLink to="/">DGLS CRFT</NavLink>
      </div>
      <div className="searchAndLK">
        {!user ? (
          <>
            <button type="button" className="btnSearch" onClick={openModal}>
              <div className="LK" />
            </button>
            <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />
          </>
        ) : (
          <NavLink to="/basket">
            <div className="basketHeader"><div className='numberBasket'>{basket.length}</div></div>
          </NavLink>
        )}

        <button type="button" onClick={openModalSearch} className="btnSearch">
          <SVG id="search" />
        </button>
        <ModalWindowSearch isOpen={isModalSearchOpen} onClose={closeModalSearch} />
      </div>
    </div>
  );
}

export default Header;
