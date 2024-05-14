import React, { useEffect, useState } from 'react';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import type { Jewelry } from '../../JewelrysPage/type';

function FavoritesPage(): JSX.Element {
  const [favorites, setFavorites] = useState<Jewelry[]>([]);

  useEffect(() => {
    let savedFavorites: Jewelry[] = [];
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      savedFavorites = JSON.parse(favoritesFromStorage) || [];
    }
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="list">
      {favorites.length === 0 ? (
        <p>Нет избранных украшений</p>
      ) : (
        favorites.map((jewelry: Jewelry) => <JewelryCard key={jewelry.id} jewelry={jewelry} />)
      )}
    </div>
  );
}

export default FavoritesPage;
