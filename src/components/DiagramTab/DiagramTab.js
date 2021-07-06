import React from 'react';
import styles from './DiagramTab.module.css';
import SelectForStats from '../SelectForStats/SelectForStats';

export default function DiagramTab({ transactions }) {
  console.log(transactions);
  return (
    <div className={styles.container}>
      <SelectForStats />
      <ul className={styles.listNames}>
        <li className={styles.nameElement}>Категория</li>
        <li className={styles.nameElement}>Сумма</li>
      </ul>

      <ul className={styles.listTransaction}>
        {transactions.map(transaction => {
          return (
            <li key={transaction.id} className={styles.elementTransaction}>
              <div className={styles.category}>{transaction.category}</div>
              <div className={styles.sum}>{transaction.sum}</div>
            </li>
          );
        })}
      </ul>

      <ul className={styles.listAll}>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Расходы:</div>
          <div className={styles.elementAllCosts}>22549.24</div>
        </li>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Доходы:</div>
          <div className={styles.elementAllIncome}>27350.00</div>
        </li>
      </ul>
    </div>
  );
}
