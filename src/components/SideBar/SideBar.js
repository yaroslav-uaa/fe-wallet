import React from 'react';
import Navigation from '../Navigation';
import CurrentBalance from '../CurrentBalance';
import Currency from '../Currency/Currency';
import s from './SideBar.module.css';
import { useMediaQuery } from 'react-responsive';

function SideBar() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div>
      <div className={s.sidebar}>
        <div className={s.box}>
          <Navigation />
          <CurrentBalance />
        </div>
        {!isTabletOrMobile && <Currency />}
      </div>
    </div>
  );
}

export default SideBar;
