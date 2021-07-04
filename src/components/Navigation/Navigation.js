import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Navigation() {
  return (
    <>
      <div>
        <ul className={s.list}>
          <li>
            <NavLink
              to="/"
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <HomeIcon color="primary" fontSize="small" />
              <span className={s.text}>Main</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <EqualizerIcon color="primary" fontSize="small" />
              <span className={s.text}>Statistics</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
