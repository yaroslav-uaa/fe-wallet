import React from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';
import Chart from '../../components/Chart/Chart';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import colors from '../../helpers/helpers';
import SelectForStats from '../../components/SelectForStats/SelectForStats';

import styles from './Stats.module.css';

const Stats = () => {
  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);
  const categories = categoriesFromState.categories;
  const balance = categoriesFromState.balance;

  const arrMoney = categories ? categories.map(trans => trans.sum) : null;

  return (
    <div className={styles.statisticsPage}>
      <Chart
        arrColors={colors.arrColors}
        arrMoney={arrMoney}
        balance={balance}
      />
      <div className={styles.bigContainer}>
        <SelectForStats />
        <DiagramTab arrColors={colors.arrColors} />
      </div>
    </div>
  );
};

export default Stats;
