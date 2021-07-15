import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: 0,
    },
  },

  form: {
display: 'flex'
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handlerChange = e => {
    console.dir(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const SubmitAvatar = file => {
    dispatch(operations.uploadAvatar(file));
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
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
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>

        {/* <button type="button" onClick={() => SubmitAvatar(file)}>
          Send
        </button> */}
        <Button size="small" variant="outlined" color="primary" onClick={() => SubmitAvatar(file)}>Send</Button>
      </form>
    </div>
  );
}
