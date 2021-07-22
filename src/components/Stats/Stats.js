import React from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';

import Chart from '../../components/Chart/Chart';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import SelectForStats from '../../components/SelectForStats/SelectForStats';

import styles from './Stats.module.css';

const Stats = () => {
  const theme = useTheme();

  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);
  const categories = categoriesFromState.categories;
  const balance = categoriesFromState.balance;

  const arrMoney = categories ? categories.map(trans => trans.sum) : null;
  const color = theme.palette.arrColors;
  return (
    <div>
      <div className={styles.statisticsPage}>
        <Chart arrColors={color} arrMoney={arrMoney} balance={balance} />
        <div>
          <SelectForStats />
          <DiagramTab arrColors={color} />
        </div>
      </div>
    </div>
  );
};
export default Stats;
