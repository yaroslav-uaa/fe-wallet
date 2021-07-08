import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FormAddTransaction.module.css';
import operationsTransaction from '../../redux/transaction/operations-transactions';
import Switch from './Switch/Switch';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import Notify from '../Notify/Notify';
import SelectCategoryIncome from './Select/SelectCategoryIncome';
import SelectCategoryExpense from './Select/SelectCategoryExpense';
import MaterialUIPickers from './Date/Date';
// import 'date-fns';

// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

export default function FormAddTransaction() {
  const initialState = {
    date: new Date(),
    category: 'Select the category',
    Income: false,
    comment: '',
    sum: '',
  };

  const [transaction, setTransaction] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = date => {
    console.log(date);
    console.log(new Date());
    setSelectedDate({ date });
  };
  const dispatch = useDispatch();

  const handleInput = useCallback(evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setTransaction(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleInputSwitch = event => {
    setTransaction(prevState => ({
      ...prevState,
      Income: event.target.checked,
      category: 'Select the category',
    }));
  };

  const addTransaction = useCallback(
    data => {
      dispatch(operationsTransaction.addTransaction(data));
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
        <Switch isChecked={transaction.Income} onSwitch={handleInputSwitch} />
      </div>
      {transaction.Income ? (
        <SelectCategoryIncome />
      ) : (
        <SelectCategoryExpense />
      )}
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
        <MaterialUIPickers inputRef={(selectedDate, handleDateChange)} />

        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}
      </div>
      <input
        type="text"
        name="comment"
        value={transaction.comment}
        onChange={handleInput}
        placeholder="Comment"
        className={styles.form_input}
      />
      <button className={styles.form_btn_add}>Add</button>
      <button
        className={styles.form_btn_reject}
        type="button"
        onClick={() => Notify.Info('transaction  👋 record was canceled')}
      >
        Reject
      </button>
      <ToastContainer autoClose={2000} />;
    </form>
  );
}
