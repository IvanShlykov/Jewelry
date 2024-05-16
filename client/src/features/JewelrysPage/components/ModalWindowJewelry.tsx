import React, { useEffect, useState } from 'react';
import '../style/modalStyle.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import type { IDJewelry } from '../type';

function ModalWindowJewelry({
  active,
  setActive,
  id,
}: {
  id: IDJewelry;
  active: boolean;
  setActive: (status: boolean) => void;
}): JSX.Element {
  const jewelry = useSelector((store: RootState) =>
    store.jewelrysState.jewelrys.find((jew) => jew.id === id),
  );

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (active) {
        mainContent.classList.add('blurred');
      } else {
        mainContent.classList.remove('blurred');
      }
    }
  }, [active]);

  if (!jewelry || jewelry.Photos.length === 0) {
    return (
      <div className="modal">
        <div className="modal_content">
          <p>Украшение не найдено или нет фото.</p>
          <button type="button" onClick={() => setActive(false)} className="close-button">
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  const goToNextPhoto = (): void => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % jewelry.Photos.length);
  };

  const goToPreviousPhoto = (): void => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + jewelry.Photos.length) % jewelry.Photos.length,
    );
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal_content">
        <div className="jewelry-photos">
          <img
            src={jewelry.Photos[currentPhotoIndex].url}
            alt={`Фото ${jewelry.name}`}
            className="jewelry-main-photo"
          />
          {jewelry.Photos.length > 1 && (
            <div className="photo-controls">
              <button type="button" className="back" onClick={goToPreviousPhoto} title="Назад">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    transform="scale(-1, 1)"
                  >
                    <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z" />
                  </svg>
                </div>
              </button>

              <button type="button" className="next" onClick={goToNextPhoto} title="Вперед">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>

        <button type="button" onClick={() => setActive(false)} className="close-button">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ModalWindowJewelry;
