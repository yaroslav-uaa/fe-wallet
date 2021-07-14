import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';

function Navigation() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <div>
        <ul className={s.list}>
          <li>
            <NavLink
              to="/main"
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <HomeIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'medium' : 'large'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>Main</span>} */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <EqualizerIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'medium' : 'large'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>Statistics</span>} */}
            </NavLink>
          </li>
          {isTabletOrMobile && (
            <li>
              <NavLink
                to="/currency"
                className={s.link}
                activeClassName={s.link__active}
              >
                <MonetizationOnIcon
                  color="secondary"
                  fontSize={isTabletOrMobile ? 'medium' : 'large'}
                />
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/user"
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <PersonIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'medium' : 'large'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>User</span>} */}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
