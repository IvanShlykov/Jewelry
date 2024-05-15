import React, { useState } from 'react'

function ChangeUser():JSX.Element {
    const [changeName, setChangeName] =useState('users.name')
    const [changeMail, setChangeMail] =useState('users.mail')
    const [changePhone, setChangePhone] =useState('users.phone')
    const [changePassword, setChangePassword] =useState('users.password')
  return (
    <div>
         <form >
                <input value={changeName} placeholder='title' required onChange={(e) => setChangeName(e.target.value)} />
                <input value={changeMail} placeholder='description' onChange={(e) => setChangeMail(e.target.value)} />
                <input value={changePhone} placeholder='img' onChange={(e) => setChangePhone(e.target.value)} />
                <input value={changePassword} placeholder='author' onChange={(e) => setChangePassword(e.target.value)} />
                <button type='submit'>Update</button>
            </form>
         
    </div>
  )
}

export default ChangeUser