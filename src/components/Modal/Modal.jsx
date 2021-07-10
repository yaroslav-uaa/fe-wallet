import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import s from './Modal.module.css';
import FormAddTransaction from './FormAddTransaction/FormAddTransaction';

const styles = {
  flex: {
    flex: 1,
  },
  label: {
    color: 'white',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ButtonAddTransactions openModal={this.handleClickOpen} />
        <div>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            className={s.container}
          >
            <Toolbar className={s.toolbar}>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.flex}>
                Close
              </Typography>
            </Toolbar>
            <List className={s.list_modal}>
              <FormAddTransaction />
              <div className={s.box_btn_rejected}>
                <Button onClick={this.handleClose} className={s.rejected}>
                  rejected
                </Button>
              </div>
            </List>
          </Dialog>
        </div>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
