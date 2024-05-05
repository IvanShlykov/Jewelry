import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
import type { CollectionHome } from '../../JewelrysPage/type';

function Collection({ collection }: { collection: CollectionHome }): JSX.Element {
  return (
    <div>
      <Link className="banner-specials" to="/specials">
        <div className="image-container specials" style={{backgroundImage: `url(${collection.photo})`}}>
          <span className="banner-collections-text">{collection.name}</span>
        </div>
        <div className='colPhoto'>{collection.ColPhotos.map((el) => <img key={el.id} src={el.url} alt="alt"/>)}</div>
      </Link>
    </div>
  );
}

export default Collection;
