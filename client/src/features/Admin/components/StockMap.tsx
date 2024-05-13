import React, { memo } from 'react';
import type { Stock } from '../type';
import { useAppDispatch } from '../../../store/store';
import { delStock } from '../adminSlice';

type Props = {
  stock: Stock;
  isChange: boolean;
};

function StockMap({ stock, isChange }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const delStockFunc = (): void => {
    dispatch(delStock(stock)).catch(console.log);
  };

  return !isChange ? (
    <div className="stockAdmin">
      <div>{stock.Size?.scale}</div>
      <div>{stock.count}</div>
    </div>
  ) : (
    <tr>
      <td>{stock.Size.scale}</td>
      <td>{stock.count}</td>
      <td>
        <button type="button" className='btnAdmin del' onClick={delStockFunc}>
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default memo(StockMap);
