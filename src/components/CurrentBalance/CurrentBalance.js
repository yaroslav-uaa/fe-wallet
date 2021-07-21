import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';
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
        setbalance(all[0].balance);
      } catch (error) {
        console.log(error.message);
      }
    };
    getbalance();
  }, [getAllTransactions]);

  return (
    <div className={s.container}>
      <p className={s.title}>balance:</p>
      <p className={s.balance}>&#8372; {balance}</p>
    </div>
  );
}

export default CurrentBalance;
