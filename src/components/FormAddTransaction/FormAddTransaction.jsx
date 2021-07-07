import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FormAddTransaction.module.css';
import operationsTransactions from '../../redux/transaction/operations-transactions';
import Select from './Select/Select';
import Switch from './Switch/Switch';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function FormAddTransaction() {
  const initialState = {
    date: new Date(),
    category: 'Select the category',
    isIncome: false,
    comment: '',
    sum: '',
  };

  const notify = text => toast(text);

  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState(initialState);

  const handleInput = useCallback(evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setTransaction(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleDate = value => {
    setTransaction({ date: value, ...transaction });
  };

  const handleInputSwitch = event => {
    console.log(event.target.checked);
    setTransaction(prevState => ({
      ...prevState,
      isIncome: event.target.checked,
      category: 'Select the category',
    }));
  };

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
      notify('Transaction added successfully');
    },
    [transaction, addTransaction, initialState],
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.form_label}>Adding Transactions</p>
      <div>
        <Switch isChecked={transaction.isIncome} onSwitch={handleInputSwitch} />
      </div>
      <Select
        listCategory={
          transaction.isIncome ? revenuesCategory : spendingCategory
        }
        handleInput={handleInput}
        category={transaction.category}
        required
      />
      <div className={styles.input_box}>
        <input
          type="text"
          placeholder="0.00"
          value={transaction.sum}
          name="sum"
          onChange={handleInput}
          className={styles.form_input_sum}
          required
        />
        <DatePicker
          onChange={handleDate}
          value={transaction.date}
          name="date"
          styles={{ border: 'none' }}
          classNam={styles.date_piker}
          required
        />
      </div>
      <input
        type="text"
        name="comment"
        value={transaction.comment}
        onChange={handleInput}
        placeholder="Comment"
        className={styles.form_input}
      />
      <button className={styles.form_btn_add}> Add</button>
      <button
        className={styles.form_btn_reject}
        type="button"
        onClick={() => notify('transaction record was canceled')}
      >
        Reject
      </button>
      <ToastContainer />;
    </form>
  );
}

const spendingCategory = [
  'Basic',
  'Food',
  'Auto',
  'Development',
  'children',
  'House',
  'Education',
  'The rest',
];
const revenuesCategory = ['Regular income ', 'Non-regular income'];
