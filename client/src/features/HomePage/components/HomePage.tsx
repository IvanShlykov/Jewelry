import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

function HomePage(): JSX.Element {
  return (
    <>
      <div className="banners">
        <Link className="banner-collections" to={'/collections'}>
          <div className="image-container collections">
            <span className="banner-collections-text">ПОДРОБНЕЕ</span>
          </div>
        </Link>
        <Link className="banner-specials" to={'/specials'}>
          <div className="image-container specials">
            <span className="banner-collections-text">ПОДРОБНЕЕ</span>
          </div>
        </Link>
        <Link className="banner-new" to={'/new'}>
          <div className="image-container new">
            <span className="banner-collections-text">ПОДРОБНЕЕ</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
