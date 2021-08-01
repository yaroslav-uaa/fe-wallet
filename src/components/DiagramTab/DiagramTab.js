import React from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';
import styles from './DiagramTab.module.css';

export default function DiagramTab({ allArray }) {
  const categoriesFromState = useSelector(
    transactionsSelectors.getAllCategoriesFromTransactions,
  );

  return (
    <div className={styles.container}>
      <ul className={styles.listNames}>
        <li className={styles.nameElement}>Category</li>
        <li className={styles.nameElement}>Amount</li>
      </ul>

      <ul className={styles.listTransaction}>
        {allArray?.length > 0 ? (
          allArray.map(({ value, sum, color }) => {
            return (
              <li className={styles.elementTransaction}>
                <div
                  style={{
                    backgroundColor: `${color}`,
                    width: '24px',
                    minHeight: '24px',
                    borderRadius: '12px',
                    marginRight: '15px',
                  }}
                ></div>
                <div className={styles.category}>{value}</div>
                <div className={styles.sum}>{sum}</div>
              </li>
            );
          })
        ) : (
          <li className={styles.elementTransaction}>
            <div className={styles.category}>Here is nothing :(</div>
          </li>
        )}
      </ul>

      <ul className={styles.listAll}>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Costs:</div>
          <div className={styles.elementAllCosts}>
            {categoriesFromState.consumption || 0}
          </div>
        </li>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Income:</div>
          <div className={styles.elementAllIncome}>
            {categoriesFromState.income || 0}
          </div>
        </li>
      </ul>
    </div>
  );
}
