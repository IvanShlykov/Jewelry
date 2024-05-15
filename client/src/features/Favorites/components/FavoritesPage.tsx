import React from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import type { Favorite, Jewelry } from '../../JewelrysPage/type';
import type { RootState } from '../../../store/store';

function FavoritesPage(): JSX.Element {
  const favorites = useSelector((store: RootState) => store.jewelrysState.favorites);

  return (
    <div className="list">
      {favorites.length === 0 ? (
        <div className='HH11 h1Basket'>Нет избранных украшений</div>
      ) : (
        favorites.map((favorite: Favorite) => (
          <JewelryCard key={favorite.id} jewelry={favorite.Jewelry} />
        ))
      )}
    </div>
  );
}

export default FavoritesPage;
