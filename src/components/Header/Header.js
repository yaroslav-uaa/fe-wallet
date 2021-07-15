import React, { useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import s from './Header.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import GetCurrency from '../GetCurrency/GetCurrency';

function Header() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.signOut());
  }, [dispatch]);
  return (
    <>
      <GetCurrency />
      <header className={s.header}>
        <div className={s.header__box}>
          <a href="/main" className={s.logo}>
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
              {/* тут буде аватарка */}
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: `${localStorage.color}`,
                  marginRight: '10px',
                }}
              ></div>
              <p>{name}</p>
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
