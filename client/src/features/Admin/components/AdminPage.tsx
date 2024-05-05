import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { initCollections } from '../adminSlice';
import AddCollection from './AddCollection';
import { logout } from '../../Auth/authSlice';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const user = useSelector((store: RootState) => store.authState.user);
  const navigate = useNavigate()

  const logOutHeader = (): void => {
    dispatch(logout()).catch(console.log);
  };

  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
  }, []);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user]);


  return (
    <div>
      <Link onClick={logOutHeader} to="/">
        Выйти
      </Link>
      <AddCollection collections={collections} />
    </div>
  );
}

export default AdminPage;
