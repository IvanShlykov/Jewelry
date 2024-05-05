import React from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import type { RootState } from '../../../store/store';

function JewelrysPage(): JSX.Element {
  const jewelrys = useSelector((store: RootState) => store.jewelrysState.jewelrys);
  return (
    <div className="list">
      {jewelrys.map((el) => (
        <JewelryCard jewelry={el} key={el.id} />
      ))}
    </div>
  );
}

export default JewelrysPage;
