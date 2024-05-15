import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SVG from '../../SVG/SVG'; // Убедитесь, что путь правильный
import type { Jewelry } from '../type';

type Props = {
  jewelry: Jewelry;
};

function JewelryCard({ jewelry }: Props): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let savedFavorites: Jewelry[] = [];
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      savedFavorites = JSON.parse(favoritesFromStorage) || [];
    }
    setIsFavorite(savedFavorites.some((item) => item.id === jewelry.id));
  }, [jewelry.id]);

  const toggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation(); // Остановка распространения события
    event.preventDefault(); // Отменить переход по ссылке

    let savedFavorites: Jewelry[] = [];
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      savedFavorites = JSON.parse(favoritesFromStorage) || [];
    }
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = savedFavorites.filter((item) => item.id !== jewelry.id);
    } else {
      updatedFavorites = [...savedFavorites, jewelry];
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

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
          <button
            className="favorite-button"
            onClick={toggleFavorite}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <SVG id={isFavorite ? 'favorites-active' : 'favorites'} />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default memo(JewelryCard);
