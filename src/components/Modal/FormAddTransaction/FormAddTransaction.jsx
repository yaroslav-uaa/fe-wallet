import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControlLabel,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Switch,
} from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Box from '@material-ui/core/Box';
import operationsTransactions from '../../../redux/transaction/operations-transactions';
import s from './Form.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Notify from '../../Notify';
import SwitchMy from '../Switch';

// const operationSchema = values => {
//   return Yup.object({
//     category: Yup.string('Choise your category outlay').required(
//       'Category is required',
//     ),
//     sum: Yup.number('Enter your amount').required('Amount is required'),
//     date: Yup.number('Enter your date operation').required('Date is required'),
//     comment: Yup.string('Enter your comments for operation')
//       .min(5, 'Your comments to short')
//       .max(30, 'Your comments to long'),
//   });
// };

interface Values {
  email: string;
}

const rangesExpense = [
  {
    value: 'Basic',
    label: 'Basic',
  },
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Auto',
    label: 'Auto',
  },
  {
    value: 'Development',
    label: 'Development',
  },
  {
    value: 'Children',
    label: 'Children',
  },
  {
    value: 'House',
    label: 'House',
  },
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'The rest',
    label: 'The rest',
  },
];

const rangesIncome = [
  {
    value: 'Regular income',
    label: 'Regular income',
  },
  {
    value: 'Non-regular income',
    label: 'Non-regular income',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    width: '100%',
  },
  uderline: {
    '&&&:before': {
      borderBottom: '2px solid rgb(82, 10, 124)',
    },
    '&&:after': {
      borderBottom: '2px solid rgb(82, 10, 124)',
    },
  },
  input: {
    width: '100%',
    textAlign: 'center',
    border: 'none',
    borderBottom: '2px solid rgb(82, 10, 124)',
    color: ' rgb(49, 12, 109)',
  },
}));

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    event => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name],
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}

const FormAddTransaction = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [chooseSelect, setSelect] = useState(true);
  const onSwitchChecked = evt => {
    console.log(evt.target.checked);
    setSelect(evt.target.checked);
  };

  console.log(chooseSelect);

  return (
    <Formik
      initialValues={{
        date: new Date(),
        category: '',
        income: chooseSelect,
        comment: '',
        sum: '',
      }}
      // validate={values => operationSchema(values)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log({ ...values, іncome: chooseSelect });
        console.log(chooseSelect);
        dispatch(
          operationsTransactions.addTransaction({
            ...values,
            income: chooseSelect,
          }),
        );

        resetForm();
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form className={s.form}>
            <h2 className={s.title}>Add transaction</h2>
            <Box margin={1}>
              <SwitchMy
                // name="Income"
                onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
                isChecked={chooseSelect}
                onClick={chooseSelect => onSwitchChecked(chooseSelect)}
              />
            </Box>
            <Box margin={1} className={s.box_select}>
              <Field
                component={TextField}
                type="text"
                name="category"
                label="Category"
                select
                variant="standard"
                helperText="Please select Category"
                margin="normal"
                className={s.select}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {!chooseSelect
                  ? createSelect(rangesIncome)
                  : createSelect(rangesExpense)}
              </Field>
            </Box>
            <Box margin={1} className={s.box_input}>
              <div className={s.box_time}>
                <Field
                  component={UpperCasingTextField}
                  name="sum"
                  type="text"
                  label="Sum"
                  width="100%"
                  className={s.sum}
                />

                <Field
                  component={DatePicker}
                  name="date"
                  label="Date"
                  className={s.date}
                />
              </div>
            </Box>
            <Box margin={1} className={s.box_input}>
              <Field
                component={TextField}
                type="text"
                label="Comment"
                name="comment"
                className={classes.input}
              />
            </Box>

            <Box margin={1}></Box>
            {isSubmitting && <LinearProgress />}

            <Box margin={1} className={s.box_btn}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                className={s.btn_submit}
              >
                Submit
              </Button>
            </Box>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
};

function createSelect(array) {
  return array.map(option => {
    return (
      <MenuItem key={option.value} value={option.value} width="100%">
        {option.label}
      </MenuItem>
    );
  });
}

export default FormAddTransaction;
