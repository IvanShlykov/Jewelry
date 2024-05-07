import React from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import type { RootState } from '../../../store/store';

function JewelrysPage(): JSX.Element {
  const jewelrys = useSelector((store: RootState) => store.jewelrysState.jewelrys);
  return (
    <div className="list">
      {jewelrys.map((jewelry) => (
        <div className="jewelry-container" key={jewelry.id}>
          <div className="jewelry-card">
            <JewelryCard jewelry={jewelry} key={jewelry.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default JewelrysPage;
