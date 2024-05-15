import React, { useState } from 'react'
import  { useAppDispatch } from '../../../store/store'

import { updateUserSlice } from '../../Auth/authSlice'



function ChangeUser():JSX.Element {
    const [changeName, setChangeName] =useState('')
    const [changeMail, setChangeMail] =useState('')
    const [changePhone, setChangePhone] =useState('')

    const dispatch = useAppDispatch();


    const handleFormSubmit = (e: React.FormEvent): void => {
      e.preventDefault();
      const updatedUser = {
        name: changeName,
        email: changeMail,
        phone: changePhone,
        
    };
      dispatch(updateUserSlice(updatedUser)).catch(console.log);
  };

  return (
      <div>
          <form onSubmit={handleFormSubmit}>
              <input value={changeName} placeholder="Name" required onChange={(e) => setChangeName(e.target.value)} />
              <input value={changeMail} placeholder="Email" onChange={(e) => setChangeMail(e.target.value)} />
              <input value={changePhone} placeholder="Phone" onChange={(e) => setChangePhone(e.target.value)} />
              <button type="submit">Update</button>
          </form>
      </div>
  );
}

export default ChangeUser;