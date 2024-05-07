import React, { useCallback, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@reduxjs/toolkit/query';
import '../style/jewelry.css';
import ModalWindowJewelry from './ModalWindowJewelry';

function JewelryPage(): JSX.Element {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const jewelry = useSelector((store: RootState) =>
    store.jewelrysState.jewelrys.find((jew) => jew.id.toString() === id),
  );

  if (!jewelry) {
    return <div>Украшение не найдено</div>;
  }

  return (
    <div className="card">
      {active && <ModalWindowJewelry active={active} setActive={setActive} id={jewelry.id} />}
      <div id="main-content">
        <div className="image-container" onClick={() => setActive(true)}>
          {jewelry.Photos.length > 0 ? (
            <img
              src={jewelry.Photos[0].url}
              alt={`Фото ${jewelry.name}`}
              className="jewelry-main-photo"
            />
          ) : (
            <div className="no-photo">К сожалению, фото отсутствует</div>
          )}
        </div>
        <Link to={`/types/${jewelry.Type.id}`}>
          <p>
            {jewelry.Type.id === jewelry.typeID
              ? jewelry.Type.name
              : 'ко всем украшениям такого же типа'}
          </p>
        </Link>
        <Link to={`/collections/${jewelry.Collection.id}`}>
          <h3>{jewelry.Collection.name}</h3>
        </Link>
        <h1>{jewelry.name}</h1>
        <p>{`${jewelry.price} ₽`}</p>
        <p>{jewelry.description}</p>
        <p>{jewelry.metallID && `МАТЕРИАЛ ${jewelry.Metall.name.toUpperCase()}`}</p>
      </div>
    </div>
  );
}

export default JewelryPage;
