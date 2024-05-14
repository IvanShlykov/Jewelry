import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { addLocation } from '../adminSlice';
import LocationsMap from './LocationsMap';
import type { Location } from '../type';

function AddFindUs({ locations }: { locations: Location[] }): JSX.Element {
  const dispatch = useAppDispatch();

  const [city, setSity] = useState('');
  const [strit, setStrit] = useState('');
  const [house, setHouse] = useState('');
  const [korp, setKorp] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  const [error, setError] = useState('');

  const message = useSelector((store: RootState) => store.adminState.error);

  const addLocationFunc = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (city && strit && house && korp && phone && time) {
      dispatch(addLocation({ city, phone, strit, house, korp, time })).catch(console.log);

      setSity('');
      setStrit('');
      setHouse('');
      setKorp('');
      setPhone('');
      setTime('');
      setError('');
    } else {
      setError('Заполните все поля');
    }
  };

  return (
    <div>
      <div className="textH1">Добавить локацию</div>
      <form onSubmit={addLocationFunc} className="collectionAdd">
        <input
          name="city"
          type="text"
          placeholder="Город"
          value={city}
          onChange={(e) => {
            setSity(e.target.value);
            setError('');
          }}
        />
        <input
          name="strit"
          type="text"
          placeholder="Улица"
          value={strit}
          onChange={(e) => {
            setStrit(e.target.value);
            setError('');
          }}
        />
        <input
          name="house"
          type="text"
          placeholder="Дом"
          value={house}
          onChange={(e) => {
            setHouse(e.target.value);
            setError('');
          }}
        />{' '}
        <input
          name="korp"
          type="text"
          placeholder="Корпус"
          value={korp}
          onChange={(e) => {
            setKorp(e.target.value);
            setError('');
          }}
        />
        <input
          name="phone"
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError('');
          }}
           className='inputW'
        />
        <input
          name="time"
          type="text"
          placeholder="Время"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setError('');
          }}
        />
        <button className="btnAdmin" type="submit">
          Добавить
        </button>
        <div className='errorAdmin'>
          {message}
          {error}
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Город</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Время</th>
            <th>Фото</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((el, i) => (
            <LocationsMap location={el} i={i} key={el.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(AddFindUs);
