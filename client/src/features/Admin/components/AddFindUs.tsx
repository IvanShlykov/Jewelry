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
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [img, setImg] = useState<File | null>();

  const [error,setError] = useState('')

  const message = useSelector((store: RootState) => store.adminState.error);

  const addLocationFunc = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (city && adress && phone && time) {
      const formData = new FormData();
      if (img) {
        formData.append('photo', img);
      }
      formData.append('city', city);
      formData.append('adress', adress);
      formData.append('phone', phone);
      formData.append('time', time);

      dispatch(addLocation(formData)).catch(console.log);

      setSity('');
      setAdress('');
      setPhone('');
      setTime('');
      setError('')

      e.currentTarget.photo.value = null;
      setImg(null);
    } else {
      setError('Заполните все поля')
    }
  };

  return (
    <div>
      <div>Добавить локацию</div>
      <form onSubmit={addLocationFunc}>
        <input
          name="city"
          type="text"
          placeholder="Город"
          value={city}
          onChange={(e) => {setSity(e.target.value); setError('');}}
        />
        <input
          name="adress"
          type="text"
          placeholder="Адрес"
          value={adress}
          onChange={(e) => {setAdress(e.target.value); setError('');}}
        />
        <input
          name="phone"
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => {setPhone(e.target.value); setError('');}}
        />
        <input
          name="time"
          type="text"
          placeholder="Время"
          value={time}
          onChange={(e) => {setTime(e.target.value);setError('');}}
        />
        <input
          name="photo"
          type="file"
          placeholder="Фото"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length > 0) setImg(event.target.files[0]);
          }}
        />
        <button className="btnAdmin" type="submit">
          Добавить
        </button>
        <div>
          {message}
          {error}
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Город</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Время</th>
            <th>Фото</th>
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
