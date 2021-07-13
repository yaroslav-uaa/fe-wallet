import React from 'react';
// import { transactionsSelectors } from '../../redux/transaction';
// import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import Balance from './Balance/Balance';
import styles from './Chart.module.css';

// import styles from './Chart.module.css';

export default function Chart({ arrColors, arrMoney, balance }) {
  // const money = transactions.map(trans => trans.sum);
  // const colors = [
  //   'rgba(255, 99, 132, 1)',
  //   'rgba(54, 162, 235, 1)',
  //   'rgba(255, 206, 86, 1)',
  //   'rgba(75, 192, 192, 1)',
  //   'rgba(153, 102, 255, 1)',
  //   'rgba(255, 159, 64, 1)',
  //   'rgba(200, 159, 64, 1)',
  //   'rgba(200, 159, 64, 1)',
  //   'rgba(200, 159, 64, 1)',
  // ];

  return (
    <div className={styles.chart}>
      <p className={styles.title}>Statistics</p>
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
