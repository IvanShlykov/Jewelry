import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { addCustomJewelery } from '../jewelrysSlice';
import type { RootState } from '../../../store/store';

import ModalWindowAuth from '../../Auth/components/ModalWindowAuth';

function AddCustomJewelery(): JSX.Element {
  const dispatch = useAppDispatch();
  const [nameJewelery, setNameJewelery] = useState('');
  const [img, setImg] = useState<File>();
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
    const formData = new FormData();
    if (user) {
      if (img) {
        formData.append('photo', img);
      }
      formData.append('description', nameJewelery);
      formData.append('userID', user.id);
      dispatch(addCustomJewelery(formData)).catch(console.log);
      setNameJewelery('');
    } else {
      console.log('User is not authenticated');
    }
  };

  return user ? (
    <div className="list">
      <form onSubmit={addCustomJeweleryForm}>
        <input
          name="photo"
          type="file"
          placeholder="Фото"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length > 0) setImg(event.target.files[0]);
          }}
        />
        <input
          value={nameJewelery}
          placeholder="author"
          onChange={(e) => setNameJewelery(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  ) : (
    <div className="list">
      <input
        name="photo"
        type="file"
        placeholder="Фото"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files.length > 0) setImg(event.target.files[0]);
        }}
      />
      <input
        value={nameJewelery}
        placeholder="author"
        onChange={(e) => setNameJewelery(e.target.value)}
      />
      <button type="button" onClick={openModal}>
        add
      </button>
      <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AddCustomJewelery;
