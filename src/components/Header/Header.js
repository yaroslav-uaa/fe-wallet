import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import s from './Header.module.css';

function Header() {
  return (
    <div>
      <header className={s.header}>
        <div className={s.logo}>
          <AccountBalanceWalletIcon />
          <p>Wallet</p>
        </div>
        <div className={s.user}>
          <a href="#" className={s.user__info}>
            <AccountCircleIcon />
            <p>User</p>
          </a>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </header>
    </div>
  );
}

export default Header;
