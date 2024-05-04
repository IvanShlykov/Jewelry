import React, { useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from '../features/Main/Main';

import Registration from '../features/Auth/components/Registration';
import { useAppDispatch } from '../store/store';
import { checked } from '../features/Auth/authSlice';
import Authorization from '../features/Auth/components/Authorization';
import { initJewelry } from '../features/JewelrysPage/jewelrySlice';
import HomePage from '../features/HomePage/components/HomePage';
import AdminPage from '../features/Admin/components/AdminPage';
import JewelrysPage from '../features/JewelrysPage/components/JewelrysPage';



function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initJewelrys()).catch(console.log)
    dispatch(checked()).catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>

         <Route path='/' element={<Main/>} >
          
         </Route>

        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="jewelry" element={<JewelrysPage />} />
          {/* <Route path="collections" element={<CollectionsPage />} />
          <Route path="specials" element={<SpecialsPage />} />
          <Route path="new" element={<NewPage />} /> */}
          <Route  path='registration' element={<Registration/>}/>
          <Route  path='authorization' element={<Authorization/>}/>
          <Route  path='admin' element={<AdminPage/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
