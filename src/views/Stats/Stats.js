import React, { useEffect, useState } from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';
import Chart from '../../components/Chart/Chart';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import SideBar from '../../components/SideBar';

import SelectForStats from '../../components/SelectForStats/SelectForStats';

import styles from './Stats.module.css';
import operationsTransactions from '../../redux/transaction/operations-transactions';

// import transactions from '../../transaction.json';
import { useDispatch } from 'react-redux';

// const getTransactionsByDate = (mounth, age) => async dispatch => {
//   try {
//     const { data } = await axios.get(
//       `/api/categories?month=${mounth}&year=${age}`,
//     ); //дописать правельный путь для fetch по дате
//   } catch (error) {}
// };

const arrColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(200, 159, 64, 1)',
  'rgba(200, 159, 64, 1)',
  'rgba(200, 159, 64, 1)',
];

const Stats = () => {
  const dispatch = useDispatch();

  const monthNow = new Date().getMonth();
  const yearNow = new Date().getFullYear();

  // const [month, setMonth] = useState(monthNow);

  // const changeMonth = value => {
  //   setMonth(value);
  // };

  useEffect(() => {
    dispatch(operationsTransactions.getTransactionsByDate(monthNow, yearNow));
    // console.log('---------------', month);
  }, [dispatch]);

  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);
  const categories = categoriesFromState.categories;
  const balance = categoriesFromState.balance;

  const arrMoney = categories ? categories.map(trans => trans.sum) : null;

  return (
    <div className="page">
      <SideBar />
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
