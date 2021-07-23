import s from './Forgot.module.css';
import { Button, TextField, LinearProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import resetOperations from '../../../../redux/ResetPass/reset-operations';
import { useFormik } from 'formik';

const ForgotPassword = ({ handleClickOpen }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: email => {
      onFormSubmit(email);
      handleClickOpen();
    },
  });
  function onFormSubmit(email) {
    dispatch(resetOperations.forgotPassword(email));
    console.log(email);
  }

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <p className={s.logo}>Wallet</p>
      <h3 className={s.title}>Forgot Password?</h3>
      <p className={s.desc}>
        Don`t worry! Just fill in your email address and we'll send you a link
        to reset your password
      </p>
      <div style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
        <TextField
          id="email-log"
          margin="normal"
          required
          label="Enter Email"
          type="email"
          name="email"
          size="small"
          fullWidth
          autoComplete="email"
          color="secondary"
          value={formik.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* <Field name="email" type="text" /> */}
        <div>
          <div className={s.buttons}>
            {formik.isSubmitting && <LinearProgress />}

            <Button
              color="primary"
              type="submit"
              style={{
                width: 140,
                background: 'rgb(136, 236, 236)',
                margin: '7px',
              }}
              disabled={formik.isSubmitting}
              onClick={formik.handleSubmit}
            >
              Send
            </Button>
            <Button
              color="primary"
              style={{
                width: 140,
                background: 'rgb(188, 121, 249)',
                margin: '7px',
              }}
              onClick={handleClickOpen}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { ForgotPassword };
