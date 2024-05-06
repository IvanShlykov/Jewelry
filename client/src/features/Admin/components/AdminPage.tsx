import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { initColPhotos, initCollections } from '../adminSlice';
import AddCollection from './AddCollection';
import { logout } from '../../Auth/authSlice';
import AddColPhoto from './AddColPhoto';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const colPhotos = useSelector((store: RootState) => store.adminState.colPhotos);
  const user = useSelector((store: RootState) => store.authState.user);
  const navigate = useNavigate()

  const logOutHeader = (): void => {
    dispatch(logout()).catch(console.log);
  };

  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
    dispatch(initColPhotos()).catch(console.log);

  }, []);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user]);

    console.log(colPhotos);
    

  return (
    <div>
      <a onClick={logOutHeader} href="/">
        Выйти
      </a>
      <AddCollection collections={collections} />
      <AddColPhoto colPhotos={colPhotos} collections={collections} />
    </div>
  );
}

export default AdminPage;
