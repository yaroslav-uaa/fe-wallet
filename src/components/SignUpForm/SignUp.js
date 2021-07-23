import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../FormCopyright/Copyright';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import f from './SignUp.module.css';

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(8),
    width: '100%',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    color: 'green',
  },

  submit: {
    marginTop: '30px',
    width: '130px',
    marginBottom: '30px',
  },
}));

function SignUp() {
  const classes = useStyles();

  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = useCallback(
    ({ name, email, password }) => {
      dispatch(authOperations.signUp({ name, email, password }));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    e => {
      onSubmit({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
    },
    [onSubmit, name, email, password],
  );

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className={classes.paper}>
        <div className={f.bg}>
          <p className={f.title}>Wallet</p>
          <p className={f.subtitle}>Register New User</p>
          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
              handleSubmit({ email, password });
            }}
          >
            <TextField
              id="name-reg"
              name="name"
              value={name}
              type="name"
              label="Username"
              required
              fullWidth
              autoComplete="name"
              autoFocus
              variant="filled"
              margin="normal"
              color="primary"
              size="small"
              onChange={event => setName(event.target.value)}
            />

            <TextField
              id="email-reg"
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              value={email}
              type="email"
              name="email"
              size="small"
              autoComplete="email"
              color="primary"
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              className={classes.input}
              id="password-reg"
              name="password"
              value={password}
              type={showPassword ? 'text' : 'password'}
              label="Password"
              required
              fullWidth
              variant="filled"
              margin="normal"
              size="small"
              autoComplete="current-password"
              color="primary"
              onChange={event => setPassword(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="/signin" variant="body1" color="secondary">
                {'Already Registered? Sign In'}
              </Link>
            </Grid>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </div>
      </div>
    </>
  );
}

export default SignUp;
