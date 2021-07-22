import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transaction';
import s from './CurrentBalance.module.css';

function CurrentBalance() {
  const getlast = useSelector(transactionsSelectors.getLastTransaction);
  const getBalanceWithCategories = useSelector(
    transactionsSelectors.getAllCategoriesFromTransactions,
  );
  // const balance = categoriesFromState.balance;
  // const balanceCategories = getlast || getBalanceWithCategories;

  return (
    <div className={s.container}>
      <p className={s.title}>balance:</p>
      <p className={s.balance}>
        &#8372;{' '}
        {getlast?.balance.toFixed(2) || getBalanceWithCategories.balance}
      </p>
    </div>
  );
}

export default CurrentBalance;
