import React from 'react';
import s from './Balance.module.css';

export default function Balance({ balance }) {
  return (
    <div>
      {balance ? (
        <p className={s.balancePositive}>&#8372; {balance}</p>
      ) : (
        <p className={s.balanceNegative}>&#8372; 0</p>
      )}
    </div>
  );
}
