import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import selectors from '../../../redux/auth/auth-selectors';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DraftsIcon from '@material-ui/icons/Drafts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';

import authOperations from '../../../redux/auth/auth-operations';
// styles
import s from './Profile.module.css';
import UploadButtons from '../UploadButtons';

export default function Profile() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

  const user = useSelector(selectors.getUser);

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch, user]);

  return (
    <div className={s.user_menu}>
      <div className={s.user_avatar}>
        <img
          src={
            user.avatar
              ? user.avatar
              : 'https://ik.imagekit.io/s2fpg15d4rx/default-avatar_8DzX4xISu.png'
          }
          alt="avatar"
          className={s.avatar}
        ></img>
        <div className={s.upload}>
          <EditIcon
            color="secondary"
            fontSize={isTabletOrMobile ? 'small' : 'large'}
          />
          <UploadButtons />
        </div>
      </div>
      <div className={s.profile_list}>
        <ul className={s.profile_user}>
          <li className={s.user_item}>
            <PersonIcon
              color="secondary"
              fontSize={isTabletOrMobile ? 'small' : 'large'}
              style={{ marginLeft: '10px' }}
            />
            <p className={s.profile_name}>{user.name}</p>
          </li>
          <li className={s.user_item}>
            <VpnKeyIcon
              color="secondary"
              fontSize={isTabletOrMobile ? 'small' : 'large'}
              style={{ marginLeft: '10px' }}
            />
            <p className={s.profile_name}>*********</p>
            <div className={s.edit}>
              <Button disableElevation></Button>
            </div>
          </li>
          <li className={s.user_item}>
            <DraftsIcon
              color="secondary"
              fontSize={isTabletOrMobile ? 'small' : 'large'}
              style={{ marginLeft: '10px' }}
            />
            <p className={s.profile_name}>{user.email}</p>
          </li>
          <li className={s.user_item}>
            <MonetizationOnIcon
              color="secondary"
              fontSize={isTabletOrMobile ? 'small' : 'large'}
              style={{ marginLeft: '10px' }}
            />
            <p className={s.profile_name}>ТУт должен быть баланс 5000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
