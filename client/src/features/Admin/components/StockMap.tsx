import React, { memo } from 'react';
import type { Stock } from '../type';

type Props = {
  stock: Stock;
};

function StockMap({ stock }: Props): JSX.Element {
  return (
    <>
      <td key={stock.id}>{stock.Size?.scale}</td>
      <td>{stock.count}</td>
    </>
  );
}

export default memo(StockMap);
