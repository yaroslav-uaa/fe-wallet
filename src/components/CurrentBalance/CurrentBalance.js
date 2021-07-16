import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transaction';
import s from './CurrentBalance.module.css';

function CurrentBalance() {
  const [balance, setbalance] = useState(0);
  const getAllTransactions = useSelector(
    transactionsSelectors.getAllTransactions,
  );

  useEffect(() => {
    const getbalance = async () => {
      try {
        const all = await getAllTransactions;
        const last = all.slice(all.length - 1);
        setbalance(last[0].balance);
        console.log(balance);
      } catch (error) {
        console.log(error.message);
      }
    };
    getbalance();
  }, [getAllTransactions]);

  console.log(balance);

  return (
    <div className={s.container}>
      <p className={s.title}>balance:</p>
      <p className={s.balance}>&#8372; {balance}</p>
    </div>
  );
}

export default CurrentBalance;
