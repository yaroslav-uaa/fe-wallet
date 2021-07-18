import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import s from '../../Modal/Modal.module.css';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  dialog: {
    margin: '0 auto',
    maxWidth: '600px',
  },
}));

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function FullScreenDialog({ open, handleClickOpen, children }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={s.container}>
          <Dialog
            PaperComponent="div"
            fullScreen={fullScreen}
            open={open}
            onClose={handleClickOpen}
            TransitionComponent={Transition}
            onPageChange={handleClickOpen}
            maxWidth="md"
            className={classes.dialog}
          >
            <div className={s.fullScreen}>
              <List className={s.list_modal}>
                <div className={s.box_close_btn}>
                  <IconButton
                    color="inherit"
                    onClick={handleClickOpen}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>

                {children}
                <div className={s.box_btn_rejected}>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    className={s.rejected}
                    size="small"
                  >
                    cancel
                  </Button>
                </div>
              </List>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
}
