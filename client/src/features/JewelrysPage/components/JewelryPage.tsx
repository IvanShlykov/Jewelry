import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useAppDispatch, type RootState } from '../../../store/store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/jewelry.css';
import ModalWindowJewelry from './ModalWindowJewelry';
import { addBasket } from '../basketSlice';


function JewelryPage(): JSX.Element {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const jewelry = useSelector((store: RootState) =>
    store.jewelrysState.jewelrys.find((jew) => jew.id.toString() === id),
  );

  let sizes = useSelector((store: RootState) => store.adminState.sizes);

  if (jewelry) {
    if (jewelry.Type.id === 1) {
      sizes = sizes.slice(0, 8);
    } else if (jewelry.Type.id === 5) {
      sizes = sizes.slice(9);
    } else {
      sizes = sizes.slice(8, 9);
    }
  }

  const [sizeID, setSize] = useState(1);
  const dispatch = useAppDispatch();
  console.log(sizeID);

  const basketAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!sizeID) {
      setSize(sizes[0].id);
    }
    dispatch(addBasket({ jewelryID: jewelry?.id, sizeID })).catch(console.log);
  };

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
    <div className="jewelry-card">
      {active && <ModalWindowJewelry active={active} setActive={setActive} id={jewelry.id} />}
      <div id="main-content">
        <div className="image-container">
          <div className="jewelry-slider-container">
            <Slider {...settings}>
              {jewelry.Photos.map((photo) => (
                <div key={photo.id} onClick={() => setActive(true)}>
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
          <i className="i-back-link">{`<`}</i>
          <Link className="pagination-type" to={`/types/${jewelry.Type.id}`}>
            <span>
              {jewelry.Type.id === jewelry.typeID
                ? jewelry.Type.name.toUpperCase()
                : 'ко всем украшениям такого же типа'}
            </span>
          </Link>
          <Link className="pagination-collection" to={`/collections/${jewelry.Collection.id}`}>
            <span>{jewelry.Collection.name.toUpperCase()}</span>
          </Link>
        </div>
        <h1>{jewelry.name}</h1>
        <p className="jewelry-price">{`${jewelry.price} p.`}</p>
        <hr className="create-line" />
        <div className="jewelry-details-options">
          {jewelry.metallID && (
            <div className="jewelry-details__option">
              <span className="jewelry-details__option-title">МАТЕРИАЛ</span>
              <span className="jewelry-details__option-value">{jewelry.Metall.name}</span>
            </div>
          )}
          <hr className="create-line" />
          <div className="jewelry-details-options">
            {jewelry.Stocks && jewelry.Stocks.length > 0 && (
              <>
                <div className="jewelry-details__option">
                  <span className="jewelry-details__option-title">Размеры в наличии</span>
                  <span className="jewelry-details__option-value size">
                    {jewelry.Stocks.map((stock) => (
                      <span key={stock.Size.id}>{stock.Size.scale} </span>
                    ))}
                  </span>
                </div>
                <hr className="create-line" />
              </>
            )}
          </div>
        </div>

        <form
          className="product-details__buttons js-add-to-cart-form"
          method="post"
          action="/netcat/modules/default/actions/cart.php"
          onSubmit={basketAdd}
        >
          <div className="jewelry-details__option contsizeJewelryPage">
            <span className="jewelry-details__option-title">Выберите размер</span>
            <select
              className="sizeJewelryPage"
              onChange={(e) => setSize(Number(e.target.value))}
              defaultValue={sizeID}
            >
              {sizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.scale}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn js-add-to-cart-btn"
            data-card-add-btn=""
            data-available-type="true"
          >
            Добавить в корзину
          </button>
        </form>
        <hr className="create-line" />
        <div className="jewelry-details__text">
          <div className="product-details__text">
            <p className="title">ОПИСАНИЕ </p>
          </div>
          <p>{jewelry.description}</p>
        </div>
      </div>
    </div>
  );
}

export default JewelryPage;
