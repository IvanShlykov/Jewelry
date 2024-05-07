import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { addCustomJewelery } from '../jewelrysSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { ApplicationWithOutID } from '../type';

function AddCustomJewelery(): JSX.Element {
  const dispatch = useAppDispatch();
  const [nameJewelery, setNameJewelery] = useState('');
  const [img, setImg] = useState('');
  const user = useSelector((store: RootState) => store.authState.user);

  const addCustomJeweleryForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user) {
      const newJewelery: ApplicationWithOutID = { description: nameJewelery, photo: img, userID: +user.id };
      dispatch(addCustomJewelery(newJewelery)).catch(console.log);
      setNameJewelery('');
      setImg('');
    } else {
      console.log('User is not authenticated');
    }
  };

  return (
    <div>
      <form onSubmit={addCustomJeweleryForm}>
        <input value={img} placeholder='img' onChange={(e) => setImg(e.target.value)} />
        <input value={nameJewelery} placeholder='author' onChange={(e) => setNameJewelery(e.target.value)} />
        <button type='submit'>add</button>
      </form>
    </div>
  );
}

export default AddCustomJewelery;