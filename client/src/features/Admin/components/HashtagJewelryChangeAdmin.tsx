import React, { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCollection, delHashTag } from '../adminSlice';
import type { Collection, IDCollection, JewHashtag } from '../type';
import CollectionUno from './CollectionUno';

type Props = {
  jewHashtag: JewHashtag;
};

function HashtagJewelryChangeAdmin({ jewHashtag }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const delHashtag = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    dispatch(delHashTag({ jewHashtagid: jewHashtag.id, jewelryID: jewHashtag.jewelryID })).catch(console.log);
  };

  return (
    <div className="hashcontent" >
      <div>{jewHashtag.Hashtag.title}</div>
      <button type="button" onClick={delHashtag}>
        X
      </button>
    </div>
  );
}

export default memo(HashtagJewelryChangeAdmin);
