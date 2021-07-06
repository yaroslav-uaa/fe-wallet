import React from 'react';
import Chart from '../../components/Chart/Chart';
import transactions from '../../transaction.json';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import styles from './Stats.module.css';
import SideBar from '../../components/SideBar';

const Stats = () => {
  // console.log(transactions);
  return (
    <div className="page">
      <SideBar />
      <div className={styles.statisticsPage}>
        <Chart transactions={transactions} />
        <DiagramTab transactions={transactions} />
      </div>
    </div>
  );
};

export default Stats;
