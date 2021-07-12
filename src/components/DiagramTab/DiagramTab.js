import React from 'react';
import { transactionsSelectors } from '../../redux/transaction';
import { useSelector } from 'react-redux';
import styles from './DiagramTab.module.css';
import { red } from '@material-ui/core/colors';

// const arr = [
//   'Basic expenses',
//   'Products',
//   'Car',
//   'Taking care of yourself',
//   'Taking care of children',
//   'Household products',
//   'Education',
//   'Leisure',
//   'Other expenses',
// ];

export default function DiagramTab({ arrColors }) {
  const { getAllCategoriesFromTransactions } = transactionsSelectors;
  const categoriesFromState = useSelector(getAllCategoriesFromTransactions);

  const categories = categoriesFromState.categories;

  return (
    <div className={styles.container}>
      <ul className={styles.listNames}>
        <li className={styles.nameElement}>Category</li>
        <li className={styles.nameElement}>Amount</li>
      </ul>

      <ul className={styles.listTransaction}>
        {categories
          ? categories.map(({ category, sum }, index) => {
              return (
                <li className={styles.elementTransaction}>
                  <div
                    style={{
                      backgroundColor: `${arrColors[index]}`,
                      width: '24px',
                      minHeight: '24px',
                      borderRadius: '12px',
                      marginRight: '15px',
                    }}
                  ></div>
                  <div className={styles.category}>{category}</div>
                  <div className={styles.sum}>{sum}</div>
                </li>
              );
            })
          : null}
      </ul>

      <ul className={styles.listAll}>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Costs:</div>
          <div className={styles.elementAllCosts}>
            {categoriesFromState.consumption}
          </div>
        </li>
        <li className={styles.elementListAll}>
          <div className={styles.elementAllText}>Income:</div>
          <div className={styles.elementAllIncome}>
            {categoriesFromState.income}
          </div>
        </li>
      </ul>
    </div>
  );
}
