import React from 'react';
import '../../Auth/modalStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../searchSlice';
import type { RootState } from '../../../store/store';
import JewelryCard from '../../JewelrysPage/components/JewelryCard';

function ModalWindowSearch({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  const query = useSelector((store: RootState)=> store.search.searchQuery);

  const dispatch = useDispatch();

  const closeModalWindow = () :void=> {
    onClose(); 
  };

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>):void=> {
        dispatch(setSearchQuery(e.target.value));
      };

  const jewelrys = useSelector((store: RootState) => store.jewelrysState.jewelrys);

  const filteredJewelrys = jewelrys.filter(jewelry =>
        jewelry.name.toLowerCase().includes(query.toLowerCase()))

  return isOpen ? (
    <div className="authmodal active">
<div className="authmodal-content">
          <div>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>  
          <input
            type="text"
            value={query}   
            onChange={handleSearch}
            placeholder="Поиск украшений..."
          />
          {query && (
            <div className="modal-body">
            <div className="scrollable-content">
              {filteredJewelrys.map((jewelry) => (
                <div className="jewelry-container" key={jewelry.id} onClick={closeModalWindow}>
                  <div className="jewelry-card">
                    <JewelryCard jewelry={jewelry} key={jewelry.id} />
                  </div>
                </div>
              ))}
            </div>  
            </div>
          )}
        </div>
        </div>  
      )
   : (
    <div className="modal" />
  );
}

export default ModalWindowSearch;

  

  
  

  