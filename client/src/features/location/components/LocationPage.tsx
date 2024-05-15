import React from 'react'
import type{ Location } from '../type/type'

function LocationPage({location}:{location:Location}):JSX.Element{
  return (
    <div>
    <div>{location.city}</div>
    <div>{location.adress}</div>
    <div>{location.phone}</div>
    <div>{location.time}</div>
    <img src={location.img} className="jewelry-main-photo"/>
   </div>
  )
}

export default LocationPage