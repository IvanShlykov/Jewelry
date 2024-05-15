import React, { memo, useState } from 'react';
import type { Application, Order } from '../type';
import Applications from './Applications';
import OrdersAdmin from './OrdersAdmin';

type Props = {
  applications: Application[];
  orders: Order[]
};

function OrderAdminPage({ applications, orders }: Props): JSX.Element {
  const applicationsOpen = applications.filter((el) => el.status === 'Просчет');
  const applicationsClose = applications.filter((el) => el.status === 'close');
  const ordersOpen = orders.filter((el) => el.status === 'onAdmin');
  const ordersClose = orders.filter((el) => el.status === 'confirmed');
  const open = true;

  const [state, setState] = useState('ind');

  return (
    <div>
      <div>
        <button
          type="button"
          className={state === 'ind' ? 'selectorButton activBtnAdminJewelry' : 'selectorButton'}
          onClick={() => setState('ind')}
        >
          Индивидуальные заказы
        </button>{' '}
        <button
          type="button"
          className={state === 'all' ? 'selectorButton activBtnAdminJewelry' : 'selectorButton'}
          onClick={() => setState('all')}
        >
          Заказы по каталогу
        </button>
      </div>

      {state === 'all' && (
        <div>
          <div className='firstOrder'>
            <div className="textH1">Открытые заказы</div>
            <OrdersAdmin orders={ordersOpen} open={open} />
          </div>

          <div>
            <div className="textH1">Закрытые заказы</div>
            <OrdersAdmin orders={ordersClose} open={false} />
          </div>
        </div>
      )}

      {state === 'ind' && (
        <div >
          <div className='firstOrder'>
            <div className="textH1">Открытые заказы</div>
            <Applications applications={applicationsOpen} open={open} />
          </div>

          <div>
            <div className="textH1">Закрытые заказы</div>
            <Applications applications={applicationsClose} open={false} />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(OrderAdminPage);
