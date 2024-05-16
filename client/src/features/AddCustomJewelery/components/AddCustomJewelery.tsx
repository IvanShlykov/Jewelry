import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { addCustomJewelery } from '../jewelrysSlice';
import type { RootState } from '../../../store/store';
import '../style.css';
import ModalWindowAuth from '../../Auth/components/ModalWindowAuth';

function AddCustomJewelery(): JSX.Element {
  const dispatch = useAppDispatch();
  const [nameJewelery, setNameJewelery] = useState('');
  const [img, setImg] = useState<File | null>();
  const user = useSelector((store: RootState) => store.authState.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  const [message, setMessage] = useState('');
  const addCustomJeweleryForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData();
    if (user) {
      if (img) {
        formData.append('photo', img);
      }
      formData.append('description', nameJewelery);
      formData.append('userID', user.id.toString());
      dispatch(addCustomJewelery(formData)).catch(console.log);
      setNameJewelery('');
      e.currentTarget.photo.value = '';
      setImg(null);
      setMessage('');
    } else {
      setIsModalOpen(true);
    }
  };
  const [imgName, setImgName] = useState('Файл не выбран');
  useEffect(() => {
    if (img) setImgName(`${img.name.slice(0,10)}...`);
  }, [img]);
  
  return (
    <div className="list">
      <div className="containerApplication">
        <div className="applicationContent">
          <div className="applicationH1">Индивидуальный заказ</div>
          <form onSubmit={addCustomJeweleryForm} className="formAplication">
            <div className="opisanieApp">1. Опишите все пожелания и нюансы</div>
            <textarea
              className="textareaApp"
              value={nameJewelery}
              placeholder="Серебряное кольцо с вырубкой в форме сердца спереди..."
              onChange={(e) => setNameJewelery(e.target.value)}
            />
            <div className="opisanieApp">
              2. Добавьте фотографию с референсом (при необходимости)
            </div>
            <label className="labelApplicat">
              <div className="fileButtonAppl">Выберите файл</div>
              <input
                className="fileUpload"
                name="photo"
                type="file"
                placeholder="Фото"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files.length > 0)
                    setImg(event.target.files[0]);
                }}
              />
              <div className="imgNameApp">{imgName}</div>
            </label>
            <button type="submit" className='addButtonAppl'>Отправить</button>
            <div>{message}</div>
          </form>
        </div>
      </div>
      <ModalWindowAuth isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AddCustomJewelery;
