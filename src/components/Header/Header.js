import React, { useCallback } from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import s from './Header.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

function Header() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.signOut()),
    [dispatch],
  );
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <AccountBalanceWalletIcon color="primary" />
          <p>Wallet</p>
        </div>
        <div className={s.user}>
          <a href="/user" className={s.user__info}>
            <AccountCircleIcon color="primary" />
            {'   '}
            <p>Welcome, {name}</p>
          </a>
          <IconButton
            type="button"
            onClick={onLogout}
            color="primary"
            variant="contained"
          >
            <ExitToAppIcon />
          </IconButton>
        </div>
      </header>
    </>
  );
}

export default Header;
