import React from 'react';
import s from './Balance.module.css';

export default function Balance({ balance }) {
  return (
    <div>
      {balance > 0 ? (
        <p className={s.balancePositive}>{balance}</p>
      ) : (
        <p className={s.balanceNegative}>{balance}</p>
      )}
    </div>
  );
}
