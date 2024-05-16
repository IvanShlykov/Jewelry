import React from 'react'
import type{ Location } from '../type/type'

function LocationPage({location}:{location:Location}):JSX.Element{
  return (
    <div className="location-card">
    <div className="location-row city" >{location.city}</div>
    <div className="location-row" >{location.adress}</div>
    <div className="location-row" >{location.phone}</div>
    <div className="location-row" >{location.time}</div>
    <img src={location.img} className="jewelry-main-photo" alt='Фото не подгрузилось'/>
   </div>
  )
}

export default LocationPage