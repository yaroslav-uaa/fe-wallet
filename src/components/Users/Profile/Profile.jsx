import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DraftsIcon from '@material-ui/icons/Drafts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EditIcon from '@material-ui/icons/Edit';
import s from './Profile.module.css';
import UploadButtons from '../UploadButtons';
import { useMediaQuery } from 'react-responsive';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../../redux/auth/auth-selectors';
import { IconButton } from '@material-ui/core';

export default function Profile() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const avatar = useSelector(selectors.getAvatar);
  console.log(avatar);

  return (
    <div className={s.user_menu}>
      <div className={s.user_avatar}>
        <img
          src={
            avatar
              ? avatar
              : 'https://ik.imagekit.io/s2fpg15d4rx/default-avatar_8DzX4xISu.png'
          }
          alt="avatar"
          className={s.avatar}
        ></img>
        <div className={s.upload}>
          <IconButton variant="outlined"><EditIcon
            fontSize="medium"
            color={isTabletOrMobile ? 'inherit' : 'primary'}
          /></IconButton >
          <UploadButtons />
        </div>
      </div>
      <div className={s.profile_list}>
        <ul className={s.profile_user}>
          <li className={s.user_item}>
            <PersonIcon
              fontSize="medium"
              color={isTabletOrMobile ? 'inherit' : 'primary'}
            />
            <p className={s.profile_name}>Name</p>
          </li>
          <li className={s.user_item}>
            <VpnKeyIcon
              fontSize="medium"
              color={isTabletOrMobile ? 'inherit' : 'primary'}
            />
            <p className={s.profile_name}>*********</p>
            <div className={s.edit}>
              <Button disableElevation></Button>
            </div>
          </li>
          <li className={s.user_item}>
            <DraftsIcon
              fontSize="medium"
              color={isTabletOrMobile ? 'inherit' : 'primary'}
            />
            <p className={s.profile_name}>testUser@gmail.com</p>
          </li>
          <li className={s.user_item}>
            <MonetizationOnIcon
              fontSize="medium"
              color={isTabletOrMobile ? 'inherit' : 'primary'}
            />
            <p className={s.profile_name}>5000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
