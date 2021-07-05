import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FormAddTransaction.module.css';
import operationsTransactions from '../../redux/transaction/operations-transactions';
import Select from './Select/Select';
import Switch from './Switch/Switch';

export default function FormAddTransaction() {
  const initialState = {
    date: new Date(),
    category: 'Выберите категорию',
    type: true,
    comment: '',
    sum: '',
  };

  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState(initialState);

  const handleInput = useCallback(evt => {
    console.log(evt.target.type);
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    console.log(name);
    console.log(value);
    setTransaction(prev => ({ ...prev, [name]: value }));
  }, []);

  const addTransaction = useCallback(
    data => {
      dispatch(operationsTransactions.addTransactions(data));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      console.log(transaction);
      addTransaction(transaction);
      setTransaction(initialState);
    },
    [transaction, addTransaction, initialState],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.form_label}>Добавить транзакцию</p>
      <Switch />
      <Select
        listCategory={spendingCategory}
        handleInput={handleInput}
        category={transaction.category}
      />
      {/* <Select /> */}
      <div className={styles.input_box}>
        <input
          type="text"
          placeholder="0.00"
          value={transaction.sum}
          name="sum"
          onChange={handleInput}
          className={styles.form_input_sum}
        />
        <label>
          <input
            type="date"
            name="date"
            onChange={handleInput}
            value={transaction.date}
          />
        </label>
      </div>
      <input
        type="text"
        name="comment"
        value={transaction.comment}
        onChange={handleInput}
        placeholder="Коментарий"
        className={styles.form_input}
      />
      <button className={styles.form_btn_add}> Добавить</button>
      <button className={styles.form_btn_reject}>Отмена</button>
    </form>
  );
}

const spendingCategory = [
  'Основной',
  'Еда',
  'Авто',
  'Развитие',
  'Дети',
  'Дом',
  'Образование',
  'Остальное',
];
const revenuesCategoty = ['Регулярный доход', 'Неpегулярный доход'];
