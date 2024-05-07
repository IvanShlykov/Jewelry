import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import type { RootState } from '../../../store/store';
import { setSearchQuery } from '../../Search/searchSlice';

function JewelrysPage(): JSX.Element {
  const query = useSelector((store: RootState)=> store.search.searchQuery);
  const dispatch = useDispatch();

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const jewelrys = useSelector((store: RootState) => store.jewelrysState.jewelrys);
  const filteredJewelrys = jewelrys.filter(jewelry =>
    jewelry.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="list">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Поиск украшений..."
      />
      {filteredJewelrys.map((jewelry) => (
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
