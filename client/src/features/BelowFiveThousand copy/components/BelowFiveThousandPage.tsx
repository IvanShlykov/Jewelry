import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initTypes, nitMetalls } from '../../JewelrysPage/jewelrysSlice';

function BelowFiveThousandPage(): JSX.Element {
  const [collectionFilter, setCollectionFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(nitMetalls()).catch(console.log);
    dispatch(initTypes()).catch(console.log);
  },[])
 

  const jewelrysSelect = useSelector((store: RootState) => store.adminState.jewelrys);
  const jewelryscollection = useSelector((store: RootState) => store.collectionsState.collections);
  const jewelrysMetalls = useSelector((store: RootState) => store.adminState.metalls);
  const jewelrysTypes = useSelector((store: RootState) => store.adminState.types);

  const filteredJewelrys = jewelrysSelect.filter(jewelry => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice = (!minPrice || jewelry.price >= +minPrice) && (!maxPrice || jewelry.price <= +maxPrice);
    const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    
    return matchesCollection && matchesPrice && matchesType && matchesMetall ;
  });

  return (
    <div className="list">
      <select value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
        <option value="">Коллекция</option>
        {jewelryscollection.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.name}</option>
        ))}
      </select>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Цена от..."
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Цена до..."
      />
      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">Тип</option>
        {jewelrysTypes.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.name}</option>
        ))}
      </select>
      <select value={typeMetall} onChange={(e) => setTypeMetall(e.target.value)}>
        <option value="">Металл</option>
        {jewelrysMetalls.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.name}</option>
        ))}
      </select>
      
      {filteredJewelrys.length === 0 ? (
        <p>Такого украшения нет</p>
      ) : (
        filteredJewelrys.map(jewelry => ( jewelry.price <= 5000 && 
          <JewelryCard key={jewelry.id} jewelry={jewelry} />
        ))
      )}
    </div>
  );
}

export default BelowFiveThousandPage;
