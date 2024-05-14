import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import {
  initApplications,
  initColPhotos,
  initCollections,
  initHashtag,
  initLocation,
  initMetalls,
  initSizes,
  initTypes,
} from '../adminSlice';
import AddCollection from './AddCollection';
import { logout } from '../../Auth/authSlice';
import AddColPhoto from './AddColPhoto';
import AddMetall from './AddMetall';
import JewelryPageAdmin from './JewelryPageAdmin';
import AddFindUs from './AddFindUs';
import OrderAdminPage from './OrderAdminPage';

function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const colPhotos = useSelector((store: RootState) => store.adminState.colPhotos);
  const metalls = useSelector((store: RootState) => store.adminState.metalls);
  // const types = useSelector((store: RootState) => store.adminState.types);
  const locations = useSelector((store: RootState) => store.adminState.locations);
  const applications = useSelector((store: RootState) => store.adminState.applications);

  const user = useSelector((store: RootState) => store.authState.user);
  const navigate = useNavigate();

  const [state, setState] = useState('bd');

  const logOutHeader = (): void => {
    dispatch(logout()).catch(console.log);
  };

  useEffect(() => {
    dispatch(initCollections()).catch(console.log);
    dispatch(initColPhotos()).catch(console.log);
    dispatch(initMetalls()).catch(console.log);
    dispatch(initTypes()).catch(console.log);
    dispatch(initHashtag()).catch(console.log);
    dispatch(initSizes()).catch(console.log);
    dispatch(initLocation()).catch(console.log);
    dispatch(initApplications()).catch(console.log);
  }, []);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <a onClick={logOutHeader} href="/">
        Выйти
      </a>
      <button type="button" onClick={() => setState('bd')}>
        Работа с БД
      </button>
      <button type="button" onClick={() => setState('jewelry')}>
        Работа с украшениями
      </button>
      <button type="button" onClick={() => setState('order')}>
        Работа с заказами
      </button>
      {state === 'bd' && (
        <>
          <AddCollection collections={collections} />
          <AddColPhoto colPhotos={colPhotos} collections={collections} />
          <AddMetall metalls={metalls} />
          <AddFindUs locations={locations} />
        </>
      )}
      {state === 'jewelry' && <JewelryPageAdmin />}
      {state === 'order' && <OrderAdminPage applications={applications} />}
    </div>
  );
}

export default AdminPage;
