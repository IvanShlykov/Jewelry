import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initNewJewelrys } from '../newJewelrysSlice';
import { setSearchQuery } from '../../Search/searchSlice';

function NewPage(): JSX.Element {
  const [collectionFilter, setCollectionFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');

  const dispatch = useAppDispatch();
  const query = useSelector((store: RootState) => store.search.searchQuery);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    dispatch(initNewJewelrys()).catch(console.log);
  }, []);

  const newJewelrysSelect = useSelector((store: RootState) => store.newJewelrysState.newJewelrys);
  const jewelryscollection = useSelector((store: RootState) => store.collectionsState.collections);
  const jewelrysMetalls = useSelector((store: RootState) => store.adminState.metalls);
  const jewelrysTypes = useSelector((store: RootState) => store.adminState.types);

  const filteredNewJewelrys = newJewelrysSelect.filter((jewelry) => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice =
      (!minPrice || jewelry.price >= +minPrice) && (!maxPrice || jewelry.price <= +maxPrice);
    const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    const matchesHashtags = query
      ? jewelry.JewHashtags.filter((hashtags) =>
          hashtags.Hashtag.title.toLowerCase().includes(query.toLowerCase()),
        ).length > 0
      : true;

    return matchesCollection && matchesPrice && matchesType && matchesMetall && matchesHashtags;
      });

  

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
