import React, { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCollection, delHashTag, delPhoto } from '../adminSlice';
import type { Collection, IDCollection, JewHashtag, Photo } from '../type';
import CollectionUno from './CollectionUno';

type Props = {
  photo: Photo;
};

function PhotoJewelryChangeAdmin({ photo }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const delPhotoFunc = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    dispatch(delPhoto( photo )).catch(console.log);
  };

  return (
    <div className="photoContent" style={{backgroundImage: `url(${photo.url})`}}>
      <button type="button" onClick={delPhotoFunc}>
        X
      </button>
    </div>
  );
}

export default memo(PhotoJewelryChangeAdmin);
