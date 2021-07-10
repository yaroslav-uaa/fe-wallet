import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="https://github.com/yaroslav-uaa/fe-wallet">
        Kotiki-Zadrotiki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/collection/71191721/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterView() {
  const classes = useStyles();

  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = useCallback(
    ({ name, email, password }) => {
      dispatch(operations.signUp({ name, email, password }));
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
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form
              className={classes.form}
              onSubmit={e => {
                e.preventDefault();
                handleSubmit({ name, email, password });
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
                variant="outlined"
                margin="normal"
                color="primary"
                size="small"
                onChange={event => setName(event.target.value)}
              />
              <TextField
                id="email-reg"
                name="email"
                value={email}
                type="email"
                label="Email Address"
                required
                fullWidth
                autoComplete="email"
                variant="outlined"
                margin="normal"
                color="primary"
                size="small"
                onChange={event => setEmail(event.target.value)}
              />
              <TextField
                id="password-reg"
                name="password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                required
                fullWidth
                variant="outlined"
                margin="normal"
                color="primary"
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
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                size="small"
              >
                Join
              </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default RegisterView;
