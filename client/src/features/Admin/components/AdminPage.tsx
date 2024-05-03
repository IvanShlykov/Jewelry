import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { initCollections } from '../adminSlice';
import AddCollection from './AddCollection';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
  }, []);

  return (
    <div>
      <AddCollection />
    </div>
  );
}

export default AdminPage;
