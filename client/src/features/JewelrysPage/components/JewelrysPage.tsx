import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import type { RootState } from '../../../store/store';

function JewelrysPage(): JSX.Element {
  const [collectionFilter, setCollectionFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');

 

  const jewelrysSelect = useSelector((store: RootState) => store.adminState.jewelrys);

  const searchPriceJewelrys = jewelrysSelect.filter(jewelry =>
    jewelry.price)

  const filteredJewelrys = jewelrysSelect.filter(jewelry => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice = !priceFilter || jewelry.price === +priceFilter;
    const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    
    return matchesCollection && matchesPrice && matchesType && matchesMetall ;
  });

  return (
    <div className="list">
      <select value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
        <option value="">Коллекция</option>
        {jewelrysSelect.map(jewelry => (
          <option key={jewelry.Collection.id} value={jewelry.Collection.id}>{jewelry.Collection.name}</option>
        ))}
      </select>
      <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">Цена</option>
        {jewelrysSelect.map(jewelry => (
          <option key={jewelry.id} value={jewelry.price}>{jewelry.price}</option>
        ))}
      </select>
      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">Тип</option>
        {jewelrysSelect.map(jewelry => (
          <option key={jewelry.Type.id} value={jewelry.Type.id}>{jewelry.Type.name}</option>
        ))}
      </select>
      <select value={typeMetall} onChange={(e) => setTypeMetall(e.target.value)}>
        <option value="">Металл</option>
        {jewelrysSelect.map(jewelry => (
          <option key={jewelry.Metall.id} value={jewelry.Metall.id}>{jewelry.Metall.name}</option>
        ))}
      </select>
      
      {filteredJewelrys.length === 0 ? (
        <p>Такого украшения нет</p>
      ) : (
        filteredJewelrys.map(jewelry => (
          <JewelryCard key={jewelry.id} jewelry={jewelry} />
        ))
      )}
    </div>
  );
}

export default JewelrysPage;




