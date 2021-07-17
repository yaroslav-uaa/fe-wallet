import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation, withRouter } from 'react-router-dom';
import s from './Navigation.module.css';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';

function Navigation() {
  const location = useLocation();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div>
        <ul className={s.list}>
          <li>
            <NavLink
              to={{
                pathname: '/',
                state: { from: location },
              }}
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <HomeIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>Main</span>} */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: '/stats', state: { from: location } }}
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <EqualizerIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>Statistics</span>} */}
            </NavLink>
          </li>
          {isTabletOrMobile && (
            <li>
              <NavLink
                to={{ pathname: '/currency', state: { from: location } }}
                className={s.link}
                activeClassName={s.link__active}
              >
                <MonetizationOnIcon
                  color="secondary"
                  fontSize={isTabletOrMobile ? 'small' : 'medium'}
                />
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to={{ pathname: '/user', state: { from: location } }}
              exact
              className={s.link}
              activeClassName={s.link__active}
            >
              <PersonIcon
                color="secondary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
              />
              {/* {!isTabletOrMobile && <span className={s.text}>User</span>} */}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default withRouter(Navigation);
