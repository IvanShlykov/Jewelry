import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initSpecificCollection } from '../specificCollectionSlice';

function CollectionPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [collectionFilter, setCollectionFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');

  useEffect(() => {
    dispatch(initSpecificCollection(collectionID)).catch(console.log);
  }, [collectionID, dispatch]);

  const specificCollectionSelect = useSelector((store: RootState) => store.specificCollectionState.jewelrysSpecificCollection);

  console.log(specificCollectionSelect, '0000000000000000000')

  const searchPriceJewelrys = specificCollectionSelect.filter(jewelry =>
    jewelry.price)

  const filteredJewelrysCollection = specificCollectionSelect.filter(jewelry => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice = !priceFilter || jewelry.price === +priceFilter;
    const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    
    return matchesCollection && matchesPrice && matchesType && matchesMetall ;
  });

  console.log(filteredJewelrysCollection, 'FIIILLLLLTEEERRR')

  return (
    <div className="list">
      <select value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
        <option value="">Коллекция</option>
        {specificCollectionSelect.map(jewelry => (
          <option key={jewelry.Collection.id} value={jewelry.Collection.id}>{jewelry.Collection.name}</option>
        ))}
      </select>
      <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">Цена</option>
        {specificCollectionSelect.map(jewelry => (
          <option key={jewelry.id} value={jewelry.price}>{jewelry.price}</option>
        ))}
      </select>
      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">Тип</option>
        {specificCollectionSelect.map(jewelry => (
          <option key={jewelry.Type.id} value={jewelry.Type.id}>{jewelry.Type.name}</option>
        ))}
      </select>
      <select value={typeMetall} onChange={(e) => setTypeMetall(e.target.value)}>
        <option value="">Металл</option>
        {specificCollectionSelect.map(jewelry => (
          <option key={jewelry.Metall.id} value={jewelry.Metall.id}>{jewelry.Metall.name}</option>
        ))}
      </select>
      
      {filteredJewelrysCollection.length === 0 ? (
        <p>Такого украшения нет</p>
      ) : (
        filteredJewelrysCollection.map(jewelry => (
          <JewelryCard key={jewelry.id} jewelry={jewelry} />
        ))
      )}
    </div>
  );
}

export default CollectionPage;