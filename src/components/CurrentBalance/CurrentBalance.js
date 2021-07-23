import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';
import s from './CurrentBalance.module.css';

function CurrentBalance() {
  const getlast = useSelector(transactionsSelectors.getLastTransaction);

  return (
    <div className={s.container}>
      <p className={s.title}>balance:</p>
      <p className={s.balance}>&#8372; {getlast?.balance || 0.0}</p>
    </div>
  );
}

export default CurrentBalance;
