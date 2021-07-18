import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import s from './Modal.module.css';
import FormAddTransaction from './FormAddTransaction';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(()=>({
  dialog: {
    margin: '0 auto',
    maxWidth: '600px',
}
})
)

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function FullScreenDialog() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

    return (
      <>
        <ButtonAddTransactions openModal={handleClickOpen} />
        <div>
          <div className={s.container}>
            <Dialog
              PaperComponent='div'
              maxWidth='md'
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
              className={classes.dialog}
            >
              <div className={s.fullScreen}>
                <List className={s.list_modal}>
                  <div className={s.box_close_btn}>
                    <IconButton
                      color="inherit"
                      onClick={handleClose}
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>

                  <FormAddTransaction handleClose={handleClose}/>
                  <div className={s.box_btn_rejected}>
                    <Button variant="contained" onClick={handleClose} className={s.rejected} size='small'>
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

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FullScreenDialog;


