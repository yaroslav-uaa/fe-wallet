import React from 'react';
import Navigation from '../Navigation';
import CurrentBalance from '../CurrentBalance';
import Currency from '../Currency/Currency';
import s from './SideBar.module.css';

function SideBar() {
  return (
    <>
      <div className={s.sidebar}>
        <div className={s.box}>
          <Navigation />
          <CurrentBalance />
        </div>
        <Currency />
      </div>
    </>
  );
}

export default SideBar;
