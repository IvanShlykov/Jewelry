import React from 'react';

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className='footerContainer'>
        <div className="blocksFooter">
          <div>Кольца</div>
          <div>Каффы</div>
          <div>Серьги</div>
          <div>Браслеты</div>
          <div>Цепи</div>
        </div>
        <div className="blocksFooter">
          <div className='oNasFoot'>
            <div>О бренде</div>
            <div>Контакты</div>
          </div>
          <div>
            <div>Доставка / оплата</div><div>Гарантия / возврат</div>
          </div>
        </div>
        <div className="blocksFooter">
          <div>instagram</div>
          <div>VK</div>
          <div>Facebook</div>
        </div>
      </div>
      <div className='oNasFoot2'>
        <div>DGLS CRFT</div>
        <div>2024</div>
      </div>
    </div>
  );
}

export default Footer;
