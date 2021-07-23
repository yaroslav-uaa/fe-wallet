import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import s from '../../../Modal/Modal.module.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default function FullScreenDialog({ open, handleClickOpen, children }) {
  return (
    <>
      <div>
        <div className={s.box}>
          <Dialog
            PaperComponent="div"
            fullScreen
            open={open}
            onClose={handleClickOpen}
            TransitionComponent={Transition}
            onPageChange={handleClickOpen}
          >
            <div
              className={s.fullScreen}
              style={{
                background:
                  'linear-gradient(130deg, #353235, #3c1c58, #223c74, #8597bd,#fffefe)',
              }}
            >
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
              </List>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
}
