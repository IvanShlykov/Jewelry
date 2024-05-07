import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../store/store';
import { addCustomJewelery } from '../jewelrysSlice';
import type { RootState } from '../../../store/store';

import type { ApplicationWithOutID } from '../type';
import ModalWindowAuth from '../../Auth/components/ModalWindowAuth';


function AddCustomJewelery(): JSX.Element {
  const dispatch = useAppDispatch();
  const [nameJewelery, setNameJewelery] = useState('');
  const [img, setImg] = useState('');
  const user = useSelector((store: RootState) => store.authState.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };


  const addCustomJeweleryForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user) {
      const newJewelery: ApplicationWithOutID = { description: nameJewelery, photo: img, userID: +user.id };
      dispatch(addCustomJewelery(newJewelery)).catch(console.log);
      setNameJewelery('');
      setImg('');
    } else {

      <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />

      console.log('User is not authenticated');

    }
  };

  return (
    user ? (
      <div>
      <form onSubmit={addCustomJeweleryForm}>
        <input value={img} placeholder='img' onChange={(e) => setImg(e.target.value)} />
        <input value={nameJewelery} placeholder='author' onChange={(e) => setNameJewelery(e.target.value)} />
        <button type='submit' >add</button>
      </form>
    </div>
   ) : (
 <div>
    <input value={img} placeholder='img' onChange={(e) => setImg(e.target.value)} />
   <input value={nameJewelery} placeholder='author' onChange={(e) => setNameJewelery(e.target.value)} />
   <button type="button" onClick={openModal} >add</button>
   <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />
</div>
    )
  )

}

export default AddCustomJewelery;