import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from './Balance/Balance';
import styles from './Chart.module.css';

export default function Chart({ arrColors, arrMoney, balance }) {
  return (
    <div className={styles.chart}>
      <div className={styles.title}>Statistics</div>
      <Balance balance={balance} />
      <div>
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
          height={280}
          width={280}
        />
      </div>
    </div>
  );
}
