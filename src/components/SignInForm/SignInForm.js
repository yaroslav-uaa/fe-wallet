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
import f from './SignInForm.module.css';

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
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

  submit: {
    marginTop: '30px',
    width: '130px',
    marginBottom: '30px',
    background: '#278b6f',
  },
}));

function SignIn() {
  const classes = useStyles();

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Dispatch
  const dispatch = useDispatch();
  const onLogin = useCallback(
    ({ email, password }) =>
      dispatch(authOperations.signIn({ email, password })),
    [dispatch],
  );

  const handleSumbit = ({ email, password }) => {
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

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
          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
              handleSumbit({ email, password });
            }}
          >
            <TextField
              id="email-log"
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
              autoFocus
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              className={classes.input}
              id="password-log"
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
              Sign In
            </Button>
            <Grid item>
              <Link href="/signup" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
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

export default SignIn;
