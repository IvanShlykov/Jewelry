import React, { useEffect} from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from '../features/Main/Main';

import Registration from '../features/Auth/components/Registration';
import { useAppDispatch } from '../store/store';
import { checked } from '../features/Auth/authSlice';

function App(): JSX.Element {

const dispatch = useAppDispatch()
useEffect(()=>{
dispatch(checked()).catch(console.log)

},[])


  return (

    <div className="App">
      <Routes>
         <Route path='/' element={<Main/>} >
          <Route  path='registration' element={<Registration/>}/>
         </Route>
      </Routes>
   
    </div>

  );
}

export default App;
