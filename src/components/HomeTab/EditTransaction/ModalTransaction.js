import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import st from '../../Modal/Modal.module.css';

const styles = {
  flex: {
    flex: 1,
    color: 'white',
  },
  label: {
    color: 'white',
  },
  paper: {
    color: 'white',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function FullScreenDialog ({open, handleClickOpen, handleClose, children}) {
    return (
      <>
        <div>
          <div className={styles.box}>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
              className={st.container}
            >
              <List className={st.list_modal}>
                <div className={st.box_close_btn}>
                  <IconButton
                    color="inherit"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>

            {children}
                <div className={st.box_btn_rejected}>
                  <Button onClick={handleClose} className={st.rejected}>
                    rejected
                  </Button>
                </div>
              </List>
            </Dialog>
          </div>
        </div>
      </>
    );
  
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
