import React from 'react';
import Chart from '../../components/Chart/Chart';
import transactions from '../../transaction.json';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import styles from './Stats.module.css';

function Stats() {
  // console.log(transactions);
  return (
    <div className={styles.statisticsPage}>
      <Chart transactions={transactions} />
      <DiagramTab transactions={transactions} />
    </div>
  );
}

export default Stats;
