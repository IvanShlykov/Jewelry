import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomePage(): JSX.Element {
  const arrayOfJewelry = useSelector((store) => store.jewelrySlice);
  return (
    <>
      <div className="banners">
        <Link className="banner-collections" to={'/collections'}>
          <img src={collection.photo} alt="collections" />{' '}
        </Link>
        <Link className="banner-specials" to={'/specials'}>
          <img src={jewelry.isSpecial && jewerly} alt="specials" />{' '}
        </Link>
        <Link className="banner-new" to={'/new'}>
          <img src={jewelry.isNew} alt="new" />{' '}
        </Link>
      </div>
      <div className="list">
        {arrayOfJewelry.map((el) => (
          <JewelryCard jewelry={el} key={el.id} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
