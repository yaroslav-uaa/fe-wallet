import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from './Balance/Balance';
import styles from './Chart.module.css';

export default function Chart({ arrColors, arrMoney, balance }) {
  return (
    <div className={styles.chart}>
      <p className={styles.title}>Statistics</p>
      <div className={styles.containerChart}>
        <Balance balance={balance} />
        <div className={styles.doughnut}>
          <Doughnut
            data={{
              datasets: [
                {
                  label: '# of Votes',
                  data: arrMoney,
                  backgroundColor: arrColors,
                  borderColor: arrColors,
                  borderWidth: 1,
                  cutout: 90,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            height={270}
            width={270}
          />
        </div>
      </div>
    </div>
  );
}
