import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';
import operationsTransactions from '../../redux/transaction/operations-transactions';
import s from './CurrentBalance.module.css';

function CurrentBalance() {
  const dispatch = useDispatch();
  const monthNow = new Date().getMonth();
  const ageNow = new Date().getFullYear();

  useEffect(
    () =>
      dispatch(operationsTransactions.getTransactionsByDate(monthNow, ageNow)),
    [dispatch],
  );

  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);
  const balance = categoriesFromState.balance;

  return (
    <div
      className={s.container}
      //     style={{
      //       background: `linear-gradient(
      //   140deg,
      //   ${localStorage.color},
      //   rgba(255, 255, 255, 0.1)
      // )`,
      //     }}
    >
      <p className={s.title}>balance:</p>
      <p className={s.balance}>&#8372; {balance}</p>
    </div>
  );
}

export default CurrentBalance;
