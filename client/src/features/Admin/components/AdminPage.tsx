import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { initColPhotos, initCollections, initMetalls } from '../adminSlice';
import AddCollection from './AddCollection';
import { logout } from '../../Auth/authSlice';
import AddColPhoto from './AddColPhoto';
import AddMetall from './AddMetall';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const colPhotos = useSelector((store: RootState) => store.adminState.colPhotos);
  const metalls = useSelector((store: RootState) => store.adminState.metalls);
  const user = useSelector((store: RootState) => store.authState.user);
  const navigate = useNavigate()

  const logOutHeader = (): void => {
    dispatch(logout()).catch(console.log);
  };
  
  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
    dispatch(initColPhotos()).catch(console.log);
    dispatch(initMetalls()).catch(console.log);
  }, []);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user]);

    console.log(metalls);
    

  return (
    <div>
      <a onClick={logOutHeader} href="/">
        Выйти
      </a>
      <AddCollection collections={collections} />
      <AddColPhoto colPhotos={colPhotos} collections={collections} />
      <AddMetall metalls={metalls}/>
    </div>
  );
}

export default AdminPage;
