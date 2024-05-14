import React, { memo } from 'react';
import type { Application } from '../type';
import Applications from './Applications';

type Props = {
  applications: Application[];
};

function OrderAdminPage({ applications }: Props): JSX.Element {
  const applicationsOpen = applications.filter((el) => el.status === 'Просчет');
  const applicationsClose = applications.filter((el) => el.status === 'close');
  const open = true;

  return (
    <div>
      <div>
        <div>Открытые заказы</div>
        <Applications applications={applicationsOpen} open={open} />
      </div>

      <div>
        <div>Закрытые заказы</div>
        <Applications applications={applicationsClose} open={false} />
      </div>
    </div>
  );
}

export default memo(OrderAdminPage);
