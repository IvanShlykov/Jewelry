import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SVG from '../../SVG/SVG'; // Убедитесь, что путь правильный
import ModalWindowAuth from '../../Auth/components/ModalWindowAuth';
import { useAppDispatch, type RootState } from '../../../store/store'; // Импортируйте свой тип RootState
import type { Jewelry } from '../type';
import { addFavorite, removeFavorite } from '../jewelrysSlice';

type Props = {
  jewelry: Jewelry;
};

function JewelryCard({ jewelry }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector((store: RootState) => store.authState.user);
  const favorites = useSelector((store: RootState) => store.jewelrysState.favorites);
  const isFovorit = favorites.find((el)=> el.jewelryID === jewelry.id && el.userID === user?.id)

  const toggleFavorite = (event: React.MouseEvent):void => {
    event.stopPropagation(); // Остановка распространения события
    event.preventDefault(); // Отменить переход по ссылке

    if (!user) {
      setIsModalOpen(true);
      return;
    }

    console.log("userID:", user.id);
    console.log("jewelryID:", jewelry.id);

    try {
      if (isFovorit) {
        dispatch(removeFavorite({ userID: +user.id, jewelryID: jewelry.id })).catch(console.log);
      } else {
        dispatch(addFavorite({ userID: +user.id, jewelryID: jewelry.id })).catch(console.log);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Ошибка при обновлении избранного:', error);
    }
  };

  return (
    <div className="card">
      <Link to={`/jewelry/${jewelry.id}`}>
        <div className="image-container">
          {jewelry.Photos?.length > 0 ? (
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
            style={{border: 'none', padding: 0, cursor: 'pointer' }}
            type='button'
          >
            <SVG id={ isFovorit ? 'favorites-active' : 'favorites'} />
          </button>
        </div>
      </Link>
      <ModalWindowAuth isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default memo(JewelryCard);