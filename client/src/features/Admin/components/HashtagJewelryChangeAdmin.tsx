import React, { memo } from 'react';
import { useAppDispatch } from '../../../store/store';
import { delHashTag } from '../adminSlice';
import type { JewHashtag } from '../type';

type Props = {
  jewHashtag: JewHashtag;
};

function HashtagJewelryChangeAdmin({ jewHashtag }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const delHashtag = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    dispatch(delHashTag({ jewHashtagid: jewHashtag.id, jewelryID: jewHashtag.jewelryID })).catch(
      console.log,
    );
  };

  return (
    <div className="hashcontent">
      <div>{jewHashtag.Hashtag.title}</div>
      <button type="button" onClick={delHashtag} className="btnHash">
        X
      </button>
    </div>
  );
}

export default memo(HashtagJewelryChangeAdmin);
