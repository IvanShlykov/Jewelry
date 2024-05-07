import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Jewelry } from '../type';

type Props = {
  jewelry: Jewelry;
};
function JewelryCard({ jewelry }: Props): JSX.Element {
  return (
    <div className="card">
      <Link to={`/jewelry/${jewelry.id}`}>
        <div className="image-container">
          {jewelry.Photos.length > 0 ? (
            <>
              <img
                src={jewelry.Photos[0].url}
                alt={`Фото ${jewelry.name}`}
                className="jewelry-main-photo"
              />
              <div className="text-overlay-top">{jewelry.name}</div>
              <div className="text-overlay-bottom">{`${jewelry.price} ₽`}</div>
            </>
          ) : (
            <div className="no-photo">К сожалению, фото отсутствует</div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default memo(JewelryCard);
