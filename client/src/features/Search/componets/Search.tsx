import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
const [searchTerm, setSearchTerm] = useState('');

const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    dispatch(setSearchQuery(query));
  };

export default function Search():JSX.Element {
    return (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={}
          />
        </div>
      );
    };

