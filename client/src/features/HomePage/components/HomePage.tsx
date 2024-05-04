import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import Collection from './Collection';

function HomePage(): JSX.Element {
  const collections = useSelector((store: RootState) => store.jewelrysState.collections);

  return (
    <div className="banners">
      <Link className="banner-new" to="/new">
        <div className="image-container new">
          <span className="banner-collections-text">Новинки</span>
        </div>
      </Link>
      <div className="TextHead">Коллекции</div>
      {collections.slice(1, 3).map((el) => (
        <Collection collection={el} key={el.id} />
      ))}
      <Link to="/collections">
        <div className="TextBottom">Смотреть все коллекции</div>
      </Link>
      <Link className="banner-specials" to="/specials">
        <div className="image-container specials">
          <span className="banner-collections-text">Смотерть</span>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
