import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../../redux/transaction';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';

import EditTransaction from '../EditTransaction';
import TransitionsModal from '../EditTransaction/ModalTransaction';

const useStyles = makeStyles(theme => ({
  head: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    color: 'white',
    fontSize: 17,
    textShadow: '2px 2px 3px grey',
    borderCollapse: 'collapse',
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    width: '100%',
    color: theme.palette.primary.dark,
    backgroundColor: 'transparent',
  },

  greentext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgb(0, 150, 32)',
  },

  redtext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgb(230, 47, 69)',
  },

  row: {
    width: '100%',
    margin: '0 auto',
    padding: '0.5em',
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
  container: {
    color: '#d2bde8',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.graidiertTwo,
    margin: '20px auto',
    maxWidth: '400px',
  }
}));

export default function HomeTabMobile() {
  const dispatch = useDispatch();
  const s = useStyles();
  const theme = useTheme();
  
  const [open, setOpen] = useState(false);
  const [transactionForEdit, setTransactionForEdit] = useState(null);

  const transactionList = useSelector(transactionsSelectors.filterTransactions);

  const deleteTransaction = useCallback(
    id => dispatch(transactionsOperations.deleteTransaction(id)),
    [dispatch],
  );

  const fetchTransactions = useCallback(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  useEffect(() => fetchTransactions(), [fetchTransactions]);
  useEffect(
    () => dispatch(transactionsOperations.fetchTransactions()),
    [dispatch],
  );
  
  function deleteT(id) {
    deleteTransaction(id);
  }

  const OnEditTransaction = ({ id, date, income, category, comment, sum }) => {
    setTransactionForEdit({ id, date, income, category, comment, sum });
    handleClickOpen();
    fetchTransactions()
  };

  function getRandomColor() {
    const color = theme.palette.arrColors
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  }

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      {transactionList.length === 0 ? (
        <p
          className={s.row}
          style={{
            height: '150px',
            margin: '50px auto',
            fontSize: '20px',
            width: '90vw',
            textAlign: 'center',
          }}
          align="center"
        >
          No transactions yet
        </p>
      ) : (
        <div>
          {transactionList.map(
            ({ id, date, income, category, comment, sum, balance }) => (
              <TableContainer key={id} className={s.container}>
                <Table>
                  <TableBody>
                    <TableCell
                      style={{
                        width: '7px',
                        backgroundColor: getRandomColor()
                      }}
                    ></TableCell>
                    <TableCell>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Date
                        </TableCell>
                        <TableCell className={s.text} align="right">
                          {moment(date).format('DD.MM.YYYY')}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Type
                        </TableCell>
                        <TableCell
                          className={income ? s.greentext : s.redtext}
                          align="right"
                        >
                          {income ? 'income' : 'expenses'}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Category
                        </TableCell>
                        <TableCell className={s.text} align="right">
                          {category}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Comment
                        </TableCell>
                        <TableCell className={s.text} align="right">
                          {comment}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Sum
                        </TableCell>
                        <TableCell
                          className={income ? s.greentext : s.redtext}
                          align="right"
                        >
                          {income ? `+${sum}` : `-${sum}`}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          Balance
                        </TableCell>
                        <TableCell className={s.text} align="right">
                          {balance}
                        </TableCell>
                      </TableRow>
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                          <IconButton
                            onClick={() =>
                              OnEditTransaction({
                                id,
                                date,
                                income,
                                category,
                                comment,
                                sum,
                              })
                            }
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell className={s.text} align="right">
                          <IconButton aria-label="delete">
                            <DeleteIcon onClick={() => deleteT(id)} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
            ),
          )}
        </div>
      )}
        <TransitionsModal open={open} handleClickOpen={handleClickOpen}>
        <EditTransaction
          handleClickOpen={handleClickOpen}
          transactionForEdit={transactionForEdit}
        />
      </TransitionsModal>
    </div>
  );
}
