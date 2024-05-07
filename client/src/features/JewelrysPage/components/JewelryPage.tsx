import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@reduxjs/toolkit/query';
import '../style/jewelry.css';
import { Link } from 'react-router-dom';

function JewelryPage(): JSX.Element {
  const { id } = useParams();
  const jewelry = useSelector((store: RootState) =>
    store.jewelrysState.jewelrys.find((jew) => jew.id.toString() === id),
  );

  if (!jewelry) {
    return <div>Украшение не найдено</div>;
  }

  return (
    <div className="card">
      <div className="jewelry-photos">
        {jewelry.Photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={`Фото ${jewelry.name}`} />
        ))}
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
      <p>{jewelry.metallID && `МАТЕРИАЛ ${jewelry.Metall.name.toUpperCase()}` }</p>
      
    </div>
  );
}

export default JewelryPage;
