import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import {
  initHashtag,
  initTypes,
  nitMetalls,
  setSearchHashtags,
} from '../JewelrysPage/jewelrysSlice';
import JewelryCard from '../JewelrysPage/components/JewelryCard';

function TypesPage(): JSX.Element {
  const { id } = useParams();
  const [collectionFilter, setCollectionFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  // const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');

  const dispatch = useAppDispatch();
  const query = useSelector((store: RootState) => store.jewelrysState.searchHashtags);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchHashtags(e.target.value));
  };

  useEffect(() => {
    dispatch(nitMetalls()).catch(console.log);
    dispatch(initTypes()).catch(console.log);
    dispatch(initHashtag()).catch(console.log);
  }, [dispatch]);

  const jewelrys = useSelector((store: RootState) => store.adminState.jewelrys);
  const jewelrysSelect = jewelrys.filter((el) => el.typeID === (id && +id));

  const jewelryscollection = useSelector(
    (store: RootState) => store.specificCollectionState.collections,
  );
  const jewelrysMetalls = useSelector((store: RootState) => store.adminState.metalls);
  // const jewelrysTypes = useSelector((store: RootState) => store.adminState.types);
  const filteredJewelrys = jewelrysSelect.filter((jewelry) => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice =
      (!minPrice || jewelry.price >= +minPrice) && (!maxPrice || jewelry.price <= +maxPrice);
    // const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    const matchesHashtags = query
      ? jewelry.JewHashtags.filter((hashtags) =>
          hashtags.Hashtag.title.toLowerCase().includes(query.toLowerCase()),
        ).length > 0
      : true;

    return matchesCollection && matchesPrice && matchesMetall && matchesHashtags;
  });

  return (
    <div className="list">
      <div className="filterCSS">
        <select value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
          <option value="">Коллекция</option>
          {jewelryscollection.map((jewelry) => (
            <option key={jewelry.id} value={jewelry.id}>
              {jewelry.name}
            </option>
          ))}
        </select>
        <select value={typeMetall} onChange={(e) => setTypeMetall(e.target.value)}>
          <option value="">Металл</option>
          {jewelrysMetalls.map((jewelry) => (
            <option key={jewelry.id} value={jewelry.id}>
              {jewelry.name}
            </option>
          ))}
        </select>
        {/* <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">Тип</option>
          {jewelrysTypes.map((jewelry) => (
            <option key={jewelry.id} value={jewelry.id}>
              {jewelry.name}
            </option>
          ))}
        </select> */}
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Цена от"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Цена до"
        />
        <input type="text" value={query} onChange={handleSearch} placeholder="Поиск по тегу" />
      </div>

      {filteredJewelrys.length === 0 ? (
        <p>Такого украшения нет</p>
      ) : (
        filteredJewelrys.map((jewelry) => <JewelryCard key={jewelry.id} jewelry={jewelry} />)
      )}
    </div>
  );
}

export default TypesPage;