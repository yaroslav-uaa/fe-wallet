import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Button, LinearProgress } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import SimpleSelect from '../Select/Select';
import Box from '@material-ui/core/Box';
import operationsTransactions from '../../../redux/transaction/operations-transactions';
import s from './Form.module.css';
import { makeStyles } from '@material-ui/core/styles';
import SwitchMy from '../Switch';
import moment from 'moment';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from '@material-ui/pickers';

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
    background: 'inherit',
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

export default function FormAddTransaction() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [chooseSelect, setSelect] = useState(false);
  const [category, setCategory] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChangeCategory = event => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
  const onSwitchChecked = evt => {
    console.log(evt.target.checked);
    setSelect(evt.target.checked);
    setCategory(null);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const formik = useFormik({
    initialValues: {
      date: selectedDate,
      category: category,
      income: chooseSelect,
      comment: '',
      sum: null,
    },
    validationSchema: SchemaYup,
    onSubmit: (values, { resetForm }) => {
      console.log(chooseSelect);
      const correctValue = {
        ...values,
        date: moment(selectedDate).format(),
        income: chooseSelect,
        category: category,
      };
      onFormSubmit(correctValue, resetForm);
    },
  });

  function onFormSubmit(data, resetForm) {
    dispatch(operationsTransactions.addTransaction(data));
    resetForm();
  }
  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h2 className={s.title}>Add transaction</h2>
        <Box margin={1} className={s.box_switch}>
          <p className={s.text}>Income</p>
          <div>
            <SwitchMy
              onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
              isChecked={chooseSelect}
              onClick={chooseSelect => onSwitchChecked(chooseSelect)}
            />
          </div>
          <p className={s.text}>Expense</p>
        </Box>

        <Box>
          <SimpleSelect
            name="category"
            isIncome={!chooseSelect}
            category={category}
            value={formik.values.category}
            onBlur={formik.handleChange}
            handleChange={handleChangeCategory}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
        </Box>

        <div className={s.box_time}>
          <Box>
            <TextField
              required
              fullWidth
              id="sum"
              name="sum"
              label="Sum"
              type="number"
              color="primary"
              className={classes.input}
              value={formik.values.sum}
              onChange={formik.handleChange}
              error={formik.touched.sum && Boolean(formik.errors.sum)}
              helperText={formik.touched.sum && formik.errors.sum}
            />
          </Box>
          <Box>
            <Grid container justifyContent="space-around" className={s.toolbar}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                classes={{
                  root: classes.root,
                  toolbar: s.toolbar,
                }}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
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
            color="primary"
            required
            className={classes.input}
            value={formik.values.comment}
            onChange={formik.handleChange}
            error={formik.touched.comment && Boolean(formik.errors.comment)}
            helperText={formik.touched.comment && formik.errors.comment}
          />
        </Box>

        <Box margin={1}></Box>
        {formik.isSubmitting && <LinearProgress />}
        <Box margin={1} className={s.box_btn}>
          <Button
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
            onClick={formik.handleSubmit}
            className={s.btn_submit}
          >
            Submit
          </Button>
        </Box>
      </MuiPickersUtilsProvider>
    </form>
  );
}
