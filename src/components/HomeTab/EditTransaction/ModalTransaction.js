import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import s from '../../Modal/Modal.module.css';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function FullScreenDialog({ open, handleClickOpen, children }) {
    return (
      <>
        <div>
          <div className={s.box}>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClickOpen}
              TransitionComponent={Transition}
              onPageChange={handleClickOpen}
              maxWidth="false"
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
                  <Button onClick={handleClickOpen} className={s.rejected}>
                    rejected
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

