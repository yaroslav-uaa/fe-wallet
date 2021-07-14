import React, { useEffect } from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';
import Chart from '../../components/Chart/Chart';
import DiagramTab from '../../components/DiagramTab/DiagramTab';

import SelectForStats from '../../components/SelectForStats/SelectForStats';

import styles from './Stats.module.css';
import operationsTransactions from '../../redux/transaction/operations-transactions';

import { useDispatch } from 'react-redux';

const arrColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(252, 110, 206, 1)',
  'rgba(116, 175, 195, 1)',
  'rgba(252, 239, 36, 1)',
  'rgba(199, 74, 180, 1)',
  'rgba(210, 224, 67, 1)',
  'rgba(109, 36, 40, 1)',
  'rgba(144, 182, 231, 1)',
  'rgba(182, 140, 136, 1)',
];

const Stats = () => {
  const dispatch = useDispatch();

  const monthNow = new Date().getMonth();
  const yearNow = new Date().getFullYear();

  useEffect(() => {
    dispatch(
      operationsTransactions.getTransactionsByDate(monthNow + 1, yearNow),
    );
  }, [dispatch]);

  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);
  const categories = categoriesFromState.categories;
  const balance = categoriesFromState.balance;

  const arrMoney = categories ? categories.map(trans => trans.sum) : null;

  return (
    <div>
      <div className={styles.statisticsPage}>
        <Chart arrColors={arrColors} arrMoney={arrMoney} balance={balance} />
        <div>
          <SelectForStats />
          <DiagramTab arrColors={arrColors} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
