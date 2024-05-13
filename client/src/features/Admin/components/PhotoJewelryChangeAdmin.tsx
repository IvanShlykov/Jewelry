import React, { memo } from 'react';
import { useAppDispatch } from '../../../store/store';
import { delPhoto } from '../adminSlice';
import type {  Photo } from '../type';

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
