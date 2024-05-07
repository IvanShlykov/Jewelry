import React, { memo, useEffect, useState } from 'react';
import '../modalStyle.css';
import { useSelector } from 'react-redux';
import type { Jewelry } from '../type';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { addHashtagSlice, changeCollection } from '../adminSlice';
import HashtagJewelryChangeAdmin from './HashtagJewelryChangeAdmin';

type Props = {
  jewelry: Jewelry;
  state: boolean;
  setState: (modal: boolean) => void;
};

function ModalWindowChangeJewelry({ jewelry, state, setState }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const collections = useSelector((store: RootState) => store.adminState.collections);
  const types = useSelector((store: RootState) => store.adminState.types);
  const metalls = useSelector((store: RootState) => store.adminState.metalls);

  const [addHash, setAddHash] = useState(true);

  const [name, setName] = useState(jewelry.name);
  const [collectionID, setCollectionID] = useState(jewelry.collectionID);
  const [typeID, setTypeID] = useState(jewelry.typeID);
  const [isNew, setIsNew] = useState(jewelry.isNew);
  const [metall, setMetall] = useState(jewelry.metallID);
  const [description, setDescription] = useState(jewelry.description);
  const [price, setPrice] = useState(jewelry.price);
  const [hashtag, setHashtag] = useState('');
  // useEffect(() => {
  //   if (jewelry.Collection) {
  //     setCollection(jewelry.Collection.name);
  //     setType(jewelry.Type.name);
  //   }
  // }, [jewelry]);

  // const [newImg, setNewImg] = useState<File>();

  const changeItem = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const formData = new FormData();
    // if (newImg) {
    //   formData.append('photo', newImg);
    // }
    // formData.append('name', name);
    // dispatch(changeCollection({ formData, id: jewelry.id })).catch(console.log);
    // setState(!state);
  };

  const addHashtag = (): void => {
    dispatch(addHashtagSlice({ title: hashtag, id: jewelry.id })).catch(console.log);
    setHashtag('');
  };
  console.log(addHash);

  return (
    <div className={state ? 'modal active' : 'modal'}>
      <div className="modal_content" style={{ minWidth: '300px' }}>
        <form onSubmit={changeItem} className="formChangeJewelry">
          <label>
            Название
            <input
              type="text"
              placeholder="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Коллекция
            <select
              onChange={(e) => setCollectionID(Number(e.target.value))}
              defaultValue={jewelry.collectionID}
            >
              {collections.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Тип
            <select
              onChange={(e) => setTypeID(Number(e.target.value))}
              defaultValue={jewelry.typeID}
            >
              {types.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Новинка
            <select
              onChange={(e) => setIsNew(e.target.value === 'да')}
              defaultValue={jewelry.isNew ? 'да' : 'нет'}
            >
              <option value="да">Да</option>
              <option value="нет">Нет</option>
            </select>
          </label>

          <label>
            Металл
            <select
              onChange={(e) => setMetall(Number(e.target.value))}
              defaultValue={jewelry.metallID}
            >
              {metalls.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Цена
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>

          <label>
            Хэштеги
            <div className="HashCont">
              {addHash ? (
                <div className="HashCont">
                  {jewelry.JewHashtags?.map((el) => (
                    <HashtagJewelryChangeAdmin key={el.id} jewHashtag={el} />
                  ))}
                  <button type="button" onClick={() => setAddHash((prev) => !prev)}>
                    Добавить
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Новый хэштег"
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                  />
                  <button type="button" onClick={addHashtag}>
                    Сохранить
                  </button>
                  <button type="button" onClick={() => setAddHash((prev) => !prev)}>
                    Закрыть
                  </button>
                </>
              )}
            </div>
          </label>

          <label>
            Описание
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          {/* <input
            name="photo"
            type="file"
            placeholder="Фото"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.files && event.target.files.length > 0)
                setNewImg(event.target.files[0]);
            }}
          /> */}
          <button className="btn" type="submit">
            Сохранить
          </button>
          <button className="btn" type="button" onClick={() => setState(false)}>
            Закрыть
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(ModalWindowChangeJewelry);
