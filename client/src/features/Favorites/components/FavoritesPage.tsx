import React from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import type { Favorite, Jewelry } from '../../JewelrysPage/type';
import { RootState } from '../../../store/store';



function FavoritesPage(): JSX.Element {
  
  const favorites = useSelector((store: RootState) => store.jewelrysState.favorites)

  console.log(favorites, '*****************')

  return (
    <div className="list">
      {favorites.length === 0 ? (
        <p>Нет избранных украшений</p>
      ) : (
        favorites.map((favorite: Favorite) => <JewelryCard key={favorite.id} jewelry={favorite.Jewelry} />)
      )}
    </div>
  );
}

export default FavoritesPage;
