import React from 'react';
import { Link } from 'react-router-dom';

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
            <div><Link to='/aboutUs'>О бренде</Link></div>
            <div><Link to='location'>Контакты</Link></div>
          </div>
          <div>
            <div>Доставка / оплата</div><div>Гарантия / возврат</div>
          </div>
        </div>
        <div className="blocksFooter">
          <div><Link to='https://www.instagram.com/dgls_crft/'>instagram</Link></div>
          <div><Link to='https://vk.com/dglscrft'>VK</Link></div>
          <div><Link to='https://business.facebook.com/latest/self_view?asset_id=1751218988485035&business_id=1660054924323800&nav_ref=pages_classic_isolated_section_inbox_redirect'>Facebook</Link></div>
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
