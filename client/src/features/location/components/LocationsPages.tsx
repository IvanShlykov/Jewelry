import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LocationPage from './LocationPage';
import { useAppDispatch, type RootState } from '../../../store/store';
import { initLocation } from '../LocationSlice';

function LocationsPages(): JSX.Element {
  const locations = useSelector((store: RootState) => store.locationState.location);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initLocation()).catch(console.log);
  }, []);

  return (
    <div className="list">
      <h3>Где нас найти</h3>
      <div>
        {locations.map((location) => (
          <LocationPage location={location} key={location.id} />
        ))}
      </div>
    </div>
  );
}

export default LocationsPages;
