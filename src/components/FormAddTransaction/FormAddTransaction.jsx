import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FormAddTransaction.module.css';
import operationsTransactions from '../../redux/transaction/operations-transactions';
import Select from './Select/Select';
import Switch from './Switch/Switch';
import DatePicker from 'react-date-picker';





export default function FormAddTransaction() {
  const initialState = {
    date: new Date(),
    category: 'Select the category',
    isIncome: false,
    comment: '',
    sum: '',
  };

  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState(initialState);

  const handleInput = useCallback(evt => {
    const value = evt.target.value
    const name = evt.target.name;
    setTransaction(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleDate = (value) => {
    setTransaction({date:value , ...transaction})
  }

  const handleInputSwitch = (event) => {
    console.log(event.target.checked)
    setTransaction(prevState=>({...prevState ,isIncome:event.target.checked , category:'Select the category' }))
  }

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
      <p className={styles.form_label}>Adding Transactions</p>
      <div>
        <Switch isChecked={transaction.isIncome} onSwitch={handleInputSwitch}/>
      </div>
      <Select
        listCategory={transaction.type ? revenuesCategory :spendingCategory }
        handleInput={handleInput}
        category={transaction.category}
      />
      <div className={styles.input_box}>
        <input
          type="text"
          placeholder="0.00"
          value={transaction.sum}
          name="sum"
          onChange={handleInput}
          className={styles.form_input_sum}
        />
        <DatePicker
        onChange={handleDate}
        value={transaction.date}
          name='date'
          styles={{border:'none'}}
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
      <button className={styles.form_btn_reject}>Reject</button>
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
