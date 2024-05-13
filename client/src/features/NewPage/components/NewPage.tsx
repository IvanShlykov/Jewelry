import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initNewJewelrys } from '../newJewelrysSlice';

function NewPage(): JSX.Element {
  const [filters, setFilters] = useState({
    collection: '',
    price: '',
    type: '',
    metall: '',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initNewJewelrys()).catch(console.log);
  }, []);

  const newJewelrysSelect = useSelector((store: RootState) => store.newJewelrysState.newJewelrys);

  const applyFilters = (newJewelrys) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] === '') {
        return true;
      }
      return newJewelrys[key].id.toString() === filters[key];
    });
  };

  const filteredNewJewelrys = newJewelrysSelect.filter(applyFilters);

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  return (
    <div className="list">
      <select
        value={filters.collection}
        onChange={(e) => handleFilterChange('collection', e.target.value)}
      >
        <option value="">Коллекция</option>
        {filteredNewJewelrys.map((jewelry) => (
          <option key={jewelry.Collection.id}>{jewelry.Collection.name}</option>
        ))}
      </select>
      <select value={filters.price} onChange={(e) => handleFilterChange('price', e.target.value)}>
        <option value="">Цена</option>
        {filteredNewJewelrys.map((jewelry) => (
          <option key={jewelry.id} value={jewelry.id}>
            {jewelry.price}
          </option>
        ))}
      </select>
      <select value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
        <option value="">Тип</option>
        {filteredNewJewelrys.map((jewelry) => (
          <option key={jewelry.id} value={jewelry.id}>
            {jewelry.price}
          </option>
        ))}
      </select>
      <select value={filters.metall} onChange={(e) => handleFilterChange('metall', e.target.value)}>
        <option value="">Металл</option>
        {filteredNewJewelrys.map((jewelry) => (
          <option key={jewelry.id} value={jewelry.id}>
            {jewelry.price}
          </option>
        ))}
      </select>
      {filteredNewJewelrys.map((jewelry) => (
        <div className="jewelry-container" key={jewelry.id}>
          <div className="jewelry-card">
            { jewelry.isNew && <JewelryCard jewelry={jewelry} key={jewelry.id} /> }
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewPage;
