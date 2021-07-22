import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
// redux
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
// materia
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
// component

import UpdateUser from '../UpdateUser/UpdateUser';
import UploadButtons from '../UploadButtons';
import Capital from '../UpdateUser/Capital';
// styles
import s from './Profile.module.css';
import { useState } from 'react';

export default function Profile() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const user = useSelector(authSelectors.getUser);
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const openFormUpdate = () => {
    setShowUpdateForm(true);
  };

  const closeFormUpdate = () => {
    setShowUpdateForm(false);
  };

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
          <IconButton variant="outlined" type="button" onClick={openFormUpdate}>
            <EditIcon fontSize="medium" color="primary" />
          </IconButton>
          <UploadButtons />
        </div>
      </div>
      <div className={s.profile_list}>
        {showUpdateForm ? (
          <UpdateUser closeFormUpdate={closeFormUpdate} />
        ) : (
          <ul className={s.profile_user}>
            <li className={s.user_item}>
              <PersonIcon
                color="primary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
                style={{ marginLeft: '10px' }}
              />
              <p className={s.profile_name}>{user.name}</p>
            </li>
            <li className={s.user_item}>
              <VpnKeyIcon
                color="primary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
                style={{ marginLeft: '10px' }}
              />
              <p className={s.profile_name}>*********</p>
              <div className={s.edit}>
                <Button disableElevation></Button>
              </div>
            </li>
            <li className={s.user_item}>
              <DraftsIcon
                color="primary"
                fontSize={isTabletOrMobile ? 'small' : 'medium'}
                style={{ marginLeft: '10px' }}
              />
              <p className={s.profile_name}>{user.email}</p>
            </li>
            <li className={s.user_item}>
              <Capital />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
