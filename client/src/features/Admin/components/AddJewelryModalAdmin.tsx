import React, { memo, useState } from 'react';
import '../modalStyle.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { addJewelry } from '../adminSlice';

type Props = {
  state: boolean;
  setState: (modal: boolean) => void;
};

function AddJewelryModalAdmin({ state, setState }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const types = useSelector((store: RootState) => store.adminState.types);
  const metalls = useSelector((store: RootState) => store.adminState.metalls);

  const [name, setName] = useState('');
  const [collectionID, setCollectionID] = useState(1);
  const [typeID, setTypeID] = useState(1);
  const [isNew, setIsNew] = useState(false);
  const [metallID, setID] = useState(1);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const [error, setError] = useState('');

  const addJewelryFunc = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name && price) {
      dispatch(
        addJewelry({ name, collectionID, typeID, isNew, metallID, description, price }),
      ).catch(console.log);

      setState(false);
      setName('');
      setCollectionID(1);
      setTypeID(1);
      setIsNew(false);
      setID(1);
      setDescription('');
      setPrice(0);
      setError('');
    } else {
      setError('Наименование или цена не может быть пустым');
    }
  };

  return (
    <div className={state ? 'adminmodal active' : 'adminmodal'}>
      <div className="adminmodal_content" style={{ minWidth: '300px' }}>
        <form onSubmit={addJewelryFunc} className="formChangeJewelry">
          <div className="label">
            <div className="descriptionLabel">Название</div>
            <input
              type="text"
              placeholder="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="label">
            <div className="descriptionLabel">Коллекция</div>
            <select
              onChange={(e) => setCollectionID(Number(e.target.value))}
              defaultValue={collectionID}
            >
              {collections.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="label">
            <div className="descriptionLabel">Тип</div>
            <select onChange={(e) => setTypeID(Number(e.target.value))} defaultValue={typeID}>
              {types.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>

          <div className="label">
            <div className="descriptionLabel">Новинка</div>
            <select
              onChange={(e) => setIsNew(e.target.value === 'да')}
              defaultValue={isNew ? 'да' : 'нет'}
            >
              <option value="да">Да</option>
              <option value="нет">Нет</option>
            </select>
          </div>

          <div className="label">
            <div className="descriptionLabel">Металл</div>
            <select onChange={(e) => setID(Number(e.target.value))} defaultValue={metallID}>
              {metalls.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="label">
            <div className="descriptionLabel">Цена</div>
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="label">
            <div className="descriptionLabel">Описание</div>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="btnForm">
            <button className="btnAdmin apply" type="submit">
              Сохранить
            </button>
            <button
              className="btnAdmin change"
              type="button"
              onClick={() => {
                setState(false);
                setError('');
              }}
            >
              Закрыть
            </button>
          </div>
          <div className="errorMessageAdmin">{error}</div>
        </form>
      </div>
    </div>
  );
}

export default memo(AddJewelryModalAdmin);
