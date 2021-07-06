import React from 'react';
import s from './Balance.module.css';

export default function Balance({ balance }) {
  return <div className={s.balance}>&#8372; {balance}</div>;
}
