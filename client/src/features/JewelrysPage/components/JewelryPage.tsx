import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/jewelry.css';
import Slider from 'react-slick';
import ModalWindowJewelry from './ModalWindowJewelry';

function JewelryPage(): JSX.Element {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const jewelry = useSelector((store: RootState) =>
    store.jewelrysState.jewelrys.find((jew) => jew.id.toString() === id),
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!jewelry) {
    return <div>Украшение не найдено</div>;
  }

  return (
    <div className="card">
      {active && <ModalWindowJewelry active={active} setActive={setActive} id={jewelry.id} />}
      <div id="main-content">
        <div className="image-container">
          <div className="jewelry-slider-container">
            <Slider {...settings}>
              {jewelry.Photos.map((photo, index) => (
                <div key={index} onClick={() => setActive(true)}>
                  <img
                    src={photo.url}
                    alt={`Фото ${jewelry.name}`}
                    className="jewelry-main-photo"
                  />
                </div>
              ))}
            </Slider>
          </div>
          {jewelry.Photos.length === 0 && (
            <div className="no-photo">К сожалению, фото отсутствует</div>
          )}
        </div>
        <div className="pagination">
          <Link to={`/types/${jewelry.Type.id}`}>
            <p>
              {jewelry.Type.id === jewelry.typeID
                ? jewelry.Type.name
                : 'ко всем украшениям такого же типа'}
            </p>
          </Link>
          <Link to={`/collections/${jewelry.Collection.id}`}>
            <h3>{jewelry.Collection.name}</h3>
          </Link>
        </div>
        <h1>{jewelry.name}</h1>
        <p>{`${jewelry.price} ₽`}</p>
        <p>{jewelry.description}</p>
        <p>{jewelry.metallID && `МАТЕРИАЛ ${jewelry.Metall.name.toUpperCase()}`}</p>
      </div>
    </div>
  );
}

export default JewelryPage;
