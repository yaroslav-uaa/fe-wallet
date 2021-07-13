import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transaction';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

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
  },
}));

export default function HomeTabMobile() {
  const dispatch = useDispatch();
  const transactionList = useSelector(transactionsSelectors.filterTransactions);

  useEffect(
    () => dispatch(transactionsOperations.fetchTransactions()),
    [dispatch],
  );
  const s = useStyles();
  function getRandomColor() {
    const colors = [
      '#0091ea',
      '#004d40',
      '#cddc39',
      '#76ff03',
      '#c6ff00',
      '#ef6c00',
      '#ffff00',
      '#bdbdbd',
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
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
                        backgroundColor: getRandomColor(),
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
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
            ),
          )}
        </div>
      )}
    </div>
  );
}
