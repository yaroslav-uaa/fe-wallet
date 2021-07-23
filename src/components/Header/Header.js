import React, { useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import s from './Header.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import GetCurrency from '../GetCurrency/GetCurrency';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.signOut());
  }, [dispatch]);
  return (
    <>
      <GetCurrency />
      <header className={s.header}>
        <div className={s.header__box}>
          <a href="/" className={s.logo}>
            <p
              style={{
                backgroundImage: `linear-gradient(to right, ${localStorage.color}, #fffefe)`,
              }}
            >
              Wallet
            </p>
          </a>
          <div className={s.user}>
            <a href="/user" className={s.user__info}>
              {<img src={user.avatar} alt="avatar" className={s.avatar} /> || (
                <AccountCircleIcon color="secondary" />
              )}
              <p>{user.name}</p>
            </a>
            <IconButton
              type="button"
              onClick={onLogout}
              color="secondary"
              variant="contained"
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
