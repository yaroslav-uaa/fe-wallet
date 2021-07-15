import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';
import { useMediaQuery } from 'react-responsive';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Button } from '@material-ui/core';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';

import s from './UploadButton.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: 0,
    },
  },

  form: {
    display: 'flex',
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handlerChange = e => {
    setFile(e.target.files[0]);
  };

  const SubmitAvatar = file => {
    dispatch(operations.uploadAvatar(file));
  };

  return (
    <div className={classes.root}>
      <div className={s.avatar_upload}>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          name="avatar"
          onChange={e => handlerChange(e)}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{ margin: ' 0px 10px ' }}
          >
            <PhotoCamera
              color="secondary"
              fontSize={isTabletOrMobile ? 'small' : 'large'}
            />
          </IconButton>
        </label>
        <button
          type="button"
          onClick={() => SubmitAvatar(file)}
          className={s.btn_save}
        >
          <UpdateOutlinedIcon
            color="secondary"
            fontSize={isTabletOrMobile ? 'small' : 'large'}
          />
        </button>
      </div>
    </div>
  );
}
