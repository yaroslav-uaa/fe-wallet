import React from 'react'
import { useState, useCallback } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../Modal';
import FormAddTransaction from '../FormAddTransaction';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    color: '#8609F9',
    background: '#d2bde8',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonAddTransactions() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => {
    return setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div>
      <Fab onClick={openModal} aria-label="add" className={classes.margin}>
        <AddIcon />
      </Fab>

      {showModal && (
        <Modal onClose={onCloseModal}>
          <FormAddTransaction />
        </Modal>
      )}
    </div>
  );
}
