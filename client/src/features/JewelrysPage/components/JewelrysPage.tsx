import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initHashtag, initTypes, nitMetalls } from '../jewelrysSlice';
import { setSearchQuery } from '../../Search/searchSlice';


function JewelrysPage(): JSX.Element {
  const [collectionFilter, setCollectionFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [typeMetall, setTypeMetall] = useState('');

  

  const dispatch = useAppDispatch()
  const query = useSelector((store: RootState)=> store.search.searchQuery);
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>):void=> {
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    dispatch(nitMetalls()).catch(console.log);
    dispatch(initTypes()).catch(console.log);
    dispatch(initHashtag()).catch(console.log);
  },[])


 console.log(query);
 
  


  const jewelrysSelect = useSelector((store: RootState) => store.adminState.jewelrys);
  const jewelryscollection = useSelector((store: RootState) => store.collectionsState.collections);
  const jewelrysMetalls = useSelector((store: RootState) => store.adminState.metalls);
  const jewelrysTypes = useSelector((store: RootState) => store.adminState.types);
  const jewelrysHashtags = useSelector((store: RootState) => store.adminState.hashtags);

  const filteredJewelrys = jewelrysSelect.filter(jewelry => {
    const matchesCollection = !collectionFilter || jewelry.Collection.id === +collectionFilter;
    const matchesPrice = (!minPrice || jewelry.price >= +minPrice) && (!maxPrice || jewelry.price <= +maxPrice);
    const matchesType = !typeFilter || jewelry.Type.id === +typeFilter;
    const matchesMetall = !typeMetall || jewelry.Metall.id === +typeMetall;
    const matchesHashtags = query ? jewelry.JewHashtags.filter(hashtags =>
      hashtags.Hashtag.title.toLowerCase().includes(query.toLowerCase())).length > 0 : true

 
    
    
    return matchesCollection && matchesPrice && matchesType && matchesMetall && matchesHashtags
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
      <div className="searcmodal-content"> 
          <input
            type="text"
            value={query}   
            onChange={handleSearch}
            placeholder="Поиск украшений..."
          />
      </div> 
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
