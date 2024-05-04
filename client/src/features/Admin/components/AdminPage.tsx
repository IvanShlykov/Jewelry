import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { initCollections } from '../adminSlice';
import AddCollection from './AddCollection';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
  }, []);

  const collections = useSelector((store: RootState) => store.adminState.collections);
  console.log(collections);
  
  return (
    <div>
      <AddCollection collections={collections}/>
    </div>
  );
}

export default AdminPage;
