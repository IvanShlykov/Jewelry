import React, { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCollection, delHashTag } from '../adminSlice';
import type { Collection, JewHashtag } from '../type';
import CollectionUno from './CollectionUno';

type Props = {
  jewHashtag: JewHashtag;
};

function HashtagJewelryChangeAdmin({ jewHashtag }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const del = ():void => {
    dispatch(delHashTag(jewHashtag.id)).catch(console.log)
  }

  return (
    <div className='hashcontent'>
    <div>{jewHashtag.Hashtag?.title}</div>
    <button type='button' onClick={del}>X</button>
    </div>
  );
}

export default memo(HashtagJewelryChangeAdmin);
