import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Jewelry } from '../type';

type Props = {
  jewelry: Jewelry;
};
function JewelryCard({ jewelry }: Props): JSX.Element {
  return (
    <div className="card">
      <Link to={`/jewelry/${jewelry.id}`}>
        <img src='https://dvajirafa.ru/data/LARIMAR/xNK4Plarimar.jpg.pagespeed.ic.a_l9lgGh-c.jpg' alt="..." />
      </Link>

      <h2>
        <em>{jewelry.description}</em>
      </h2>
    </div>
  );
}

export default memo(JewelryCard);
