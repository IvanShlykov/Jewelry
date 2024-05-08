import React, { memo, useCallback, useEffect, useState } from 'react';
import '../modalStyle.css';
import { useSelector } from 'react-redux';
import type { Jewelry } from '../type';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { addHashtagSlice, addPhotoSlice, addStock, changeCollection } from '../adminSlice';
import HashtagJewelryChangeAdmin from './HashtagJewelryChangeAdmin';
import PhotoJewelryChangeAdmin from './PhotoJewelryChangeAdmin';
import StockMap from './StockMap';

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
  const sizes = useSelector((store: RootState) => store.adminState.sizes);

  // console.log(hashtags);

  const [addHash, setAddHash] = useState(true);
  const [addPhoto, setPhotoAdd] = useState(true);
  const [addStockState, setStockAdd] = useState(true);

  const [name, setName] = useState(jewelry.name);
  const [collectionID, setCollectionID] = useState(jewelry.collectionID);
  const [typeID, setTypeID] = useState(jewelry.typeID);
  const [isNew, setIsNew] = useState(jewelry.isNew);
  const [metall, setMetall] = useState(jewelry.metallID);
  const [description, setDescription] = useState(jewelry.description);
  const [price, setPrice] = useState(jewelry.price);
  const [hashtag, setHashtag] = useState('');
  const [img, setImg] = useState<File | null>();
  const [count, setCount] = useState(1);
  const [sizeID,setIDSize] = useState(1)



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
  const addHashtag = useCallback(() => {
    dispatch(addHashtagSlice({ title: hashtag, id: jewelry.id })).catch(console.log);
    setHashtag('');
  }, [hashtag, jewelry]);

  const addPhotoFunc = (): void => {
    const formData = new FormData();
    if (img) {
      formData.append('photo', img);
    }
    formData.append('jewelryID', jewelry.id.toString());

    dispatch(addPhotoSlice(formData)).catch(console.log);
    setPhotoAdd(!addPhoto);
  };

  const addStockFunc = (): void => {
    dispatch(addStock({sizeID, count, jewelryID: jewelry.id})).catch(console.log);
  };

  return (
    <div className={state ? 'modal active' : 'modal'}>
      <div className="modal_content" style={{ minWidth: '300px' }}>
        <form onSubmit={changeItem} className="formChangeJewelry">
          <label>
            <div className="descriptionLabel">Название</div>
            <input
              type="text"
              placeholder="Название"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <div className="descriptionLabel">Коллекция</div>
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
            <div className="descriptionLabel">Тип</div>
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
            <div className="descriptionLabel">Новинка</div>
            <select
              onChange={(e) => setIsNew(e.target.value === 'да')}
              defaultValue={jewelry.isNew ? 'да' : 'нет'}
            >
              <option value="да">Да</option>
              <option value="нет">Нет</option>
            </select>
          </label>

          <label>
            <div className="descriptionLabel">Металл</div>
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
            <div className="descriptionLabel">Цена</div>
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>

          <label>
            <div className="descriptionLabel">Хэштеги</div>
            <div className="HashCont">
              {addHash ? (
                <div className="HashCont">
                  {jewelry.JewHashtags?.map((el) => (
                    <HashtagJewelryChangeAdmin key={el.id} jewHashtag={el} />
                  ))}
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
                </>
              )}
              <button type="button" onClick={() => setAddHash(!addHash)}>
                {addHash ? `Добавить` : 'Закрыть'}
              </button>
            </div>
          </label>

          <label>
            <div className="descriptionLabel">Фото</div>
            <div>
              {addPhoto ? (
                <div>
                  <div className="photoConteiner">
                    {jewelry.Photos?.map((el) => (
                      <PhotoJewelryChangeAdmin key={el.id} photo={el} />
                    ))}
                  </div>
                  <button type="button" onClick={() => setPhotoAdd(!addPhoto)}>
                    Добавить
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    name="photo"
                    type="file"
                    placeholder="Фото"
                    style={{ color: 'black' }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (event.target.files && event.target.files.length > 0)
                        setImg(event.target.files[0]);
                    }}
                  />
                  <button type="button" onClick={addPhotoFunc}>
                    Сохранить
                  </button>
                </div>
              )}
            </div>
          </label>

          <label>
            <div className="descriptionLabel">Склад</div>
            {addStockState ? (
              <div>
                {jewelry.Stocks?.length ? (
                  <>
                    <table>
                      <tr>
                        <td>Размер</td>
                        <td>Кол-во</td>
                      </tr>
                      <tr>
                        {jewelry.Stocks.map((el) => (
                          <StockMap key={el.id} stock={el} />
                        ))}
                      </tr>
                    </table>
                    <button type="button" onClick={() => setStockAdd(!addStockState)}>
                      Добавить
                    </button>
                  </>
                ) : (
                  <div>
                    Нет на складе
                    <button type="button" onClick={() => setStockAdd(!addStockState)}>
                      Добавить
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <select onChange={(e) => setIDSize(Number(e.target.value))}>
                  {sizes.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.scale}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Количество"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                />
                <button type="button" onClick={addStockFunc}>
                  Сохранить
                </button>
              </div>
            )}
          </label>

          <label>
            <div className="descriptionLabel">Описание</div>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

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
