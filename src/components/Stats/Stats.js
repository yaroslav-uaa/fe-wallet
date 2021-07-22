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
  const balance = categoriesFromState.balance;
  const categoriesWithBD = categoriesFromState.categories;
  const months = theme.months;
  const allCategoriesWithColors = theme.categories;

  const visibleCategories = allCategoriesWithColors.map(el => {
    const arrCategoriesWithDB = categoriesWithBD
      ? categoriesWithBD.map(trans => trans.category)
      : [];
    if (arrCategoriesWithDB.includes(el.value)) {
      return el;
    }
  });

  const filteredVisibleCategories = visibleCategories.filter(
    e => e !== undefined,
  );

  const color = filteredVisibleCategories.map(el => el.color);

  const arrMoney = categoriesWithBD
    ? categoriesWithBD.map(trans => trans.sum)
    : null;
  return (
    <>
      <div className={styles.statisticsPage}>
        <Chart arrColors={color} arrMoney={arrMoney} balance={balance} />
        <div>
          <SelectForStats months={months} />
          <DiagramTab arrColors={color} />
        </div>
      </div>
    </>
  );
};
export default Stats;
