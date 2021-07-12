import React from 'react';
import { transactionsSelectors } from '../../../redux/transaction';
import { useSelector } from 'react-redux';
import s from './Balance.module.css';

export default function Balance({ balance }) {
  return (
    <div>
      {balance > 0 ? (
        <div className={s.balancePositive}> &#8372; {balance}</div>
      ) : (
        <div className={s.balanceNegative}>&#8372; {balance} </div>
      )}
    </div>
  );
}
