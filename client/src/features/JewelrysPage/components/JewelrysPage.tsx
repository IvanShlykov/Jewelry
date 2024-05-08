import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import JewelryCard from './JewelryCard';
import type { RootState } from '../../../store/store';

function JewelrysPage(): JSX.Element {
const [filters, setFilters] = useState({
 collection: '',
price: '',
type: '',
metall: ''
 });

 const jewelrysSelect = useSelector((store: RootState) => store.adminState.jewelrys);

const applyFilters = (jewelry) => {
return Object.keys(filters).every(key => {
if (filters[key] === '') {
 return true;
 }
 return jewelry[key].id.toString() === filters[key];
});
 };

 const filteredJewelrys = jewelrysSelect.filter(applyFilters);

const handleFilterChange = (filterName, value) => {
 setFilters({
 ...filters,
 [filterName]: value
 });
 };

 return (
<div className="list">
 <select value={filters.collection} onChange={(e) => handleFilterChange('collection', e.target.value)}>
 <option value="">Коллекция</option>
 {filteredJewelrys.map(jewelry => (
          <option key={jewelry.Collection.id} >{jewelry.Collection.name}</option>
        ))}
</select>
 <select value={filters.price} onChange={(e) => handleFilterChange('price', e.target.value)}>
 <option value="">Цена</option>
     {filteredJewelrys.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.price}</option>
        ))}
 </select>
 <select value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
 <option value="">Тип</option>
 {filteredJewelrys.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.price}</option>
        ))}
 </select>
 <select value={filters.metall} onChange={(e) => handleFilterChange('metall', e.target.value)}>
 <option value="">Металл</option>
 {filteredJewelrys.map(jewelry => (
          <option key={jewelry.id} value={jewelry.id}>{jewelry.price}</option>
        ))}
 </select>
 {filteredJewelrys.map(jewelry => (
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


