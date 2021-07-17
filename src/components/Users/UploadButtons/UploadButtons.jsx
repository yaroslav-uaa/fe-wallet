import React from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';

// materia
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// styles
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const handlerChange = e => {
    const file = e.target.files[0];
    dispatch(operations.uploadAvatar(file));
  };

  const SubmitAvatar = () => {
    dispatch(operations.getCurrentUser());
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
            <PhotoCamera />
          </IconButton>
        </label>
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => SubmitAvatar()}
        >
          <CloudUploadIcon />
        </IconButton>
      </div>
    </div>
  );
}
