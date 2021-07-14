import React, { useState, useEffect, useCallback } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import SimpleSelect from '../../Modal/Select/Select';
import Box from '@material-ui/core/Box';
import { transactionsOperations } from '../../../redux/transaction';
import s from '../../Modal/FormAddTransaction/Form.module.css';
import { makeStyles } from '@material-ui/core/styles';
import SwitchMy from '../../Modal/Switch';
import moment from 'moment';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { boolean } from 'yup/lib/locale';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
  },
  uderline: {
    '&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
  input: {
    textAlign: 'center',
    color: 'white',
  },
}));

const SchemaYup = Yup.object({
  //   category: Yup.string('Choose your category').required('Category is required'),
  sum: Yup.number('Enter your sum').required('Sum is required'),
  //   date: Yup.string('Choose your date operation').required('Date is required'),
  comment: Yup.string('Enter your comment')
    .min(3, 'Your comment to short')
    .required('Comment is required'),
});

export default function EditTransaction({ transactionForEdit, handleClickOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [income, setSelect] = useState(false);
  const [initCategory, setCategory] = useState();
  const [date, setSelectedDate] = useState(new Date());
  const [sum, setSum] = useState(null)
  const [comment, setComment] = useState('')
    
  useEffect(() => {
    if (transactionForEdit) {
      const { id, date, category, income, sum, comment, } = transactionForEdit;
      setId(id);
      setSelectedDate(date);
      setCategory(category);
      setSelect(income);
      setSum(sum);
      setComment(comment);
    }

    return () => {
      setId('');
      setCategory('');
      setCategory('');
      setSelect(boolean)
      setSum(null)
      setComment('')
    };
  }, [transactionForEdit]);

  const updateTransactions = useCallback(
    ({ date, category, income, comment, sum, transactionId }) => {
      dispatch(transactionsOperations.updateTransaction({ date, category, income, comment, sum, transactionId }));
      console.log({ date, category, income, comment, sum, transactionId })
    },
    [dispatch],
  );
  
  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };
  const onSwitchChecked = evt => {
    setSelect(evt.target.checked);
    setCategory(null);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleSumChange = event => {
    setSum(event.target.value);
  };
  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const onSubmit = (values) => {
    const correctValue = {
      ...values,
      date: moment(date).format(),
      income: income,
      category: initCategory,
      comment: comment,
      sum: sum,
      transactionId: id,
    };
    updateTransactions(correctValue);
    handleClickOpen()
    window.location.reload()
  }

  return (
      <Formik 
       onSubmit={onSubmit}
       validationSchema={SchemaYup}
     >
    <form onSubmit={onSubmit} className={s.form}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h2 className={s.title}>Edit transaction</h2>
        <Box margin={1} className={s.box_switch}>
          <p className={s.text}>Income</p>
          <div>
            <SwitchMy
              onSwitch={income => onSwitchChecked(income)}
              isChecked={income}
              onClick={income => onSwitchChecked(income)}
            />
          </div>
          <p className={s.text}>Expense</p>
        </Box>

        <Box>
          <SimpleSelect
            name="category"
            isIncome={!income}
            category={initCategory}
            value={initCategory}
            handleChange={handleChangeCategory}

          />
        </Box>

        <div className={s.box_time}>
          <Box>
            <TextField
              fullWidth
              id="sum"
              name="sum"
              label="Sum"
              type="number"
              className={classes.input}
              value={sum}
              onChange={handleSumChange}

            />
          </Box>
          <Box>
            <Grid container justifyContent="space-around" className={s.toolbar}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={date}
                classes={{
                  root: classes.root,
                  toolbar: s.toolbar,
                }}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
               
              />
            </Grid>
          </Box>
        </div>
        <Box margin={1} className={s.box_select}>
          <TextField
            fullWidth
            id="comment"
            name="comment"
            label="Comment"
            type="text"
            className={classes.input}
            value={comment}
            onChange={handleCommentChange}
          />
        </Box>

        <Box margin={1}></Box> 
        <Box margin={1} className={s.box_btn}>
          <Button
            variant="contained"
            color="primary"
          
            onClick={onSubmit}
            className={s.btn_submit}
          >
            Submit
          </Button>
        </Box>
      </MuiPickersUtilsProvider>
    </form></Formik>
  );
}
