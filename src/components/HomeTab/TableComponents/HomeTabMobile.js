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
  TableFooter,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import sortBy from 'lodash.sortby';
import moment from 'moment';

import EditTransaction from '../EditTransaction';
import TransitionsModal from '../EditTransaction/ModalTransaction';
import TablePaginationActions from './HomeTabPagination';

const useStyles = makeStyles(theme => ({
  head: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    color: '#fffefe',
    fontSize: 14,
    borderCollapse: 'collapse',
  },
  cont: {
    width: '90%',
    margin: '0',
    backgroundColor: 'transparent',
    border: 'none'
  },
  table: {
    width: '100%',
    margin: 'auto',
    backgroundColor: 'transparent',
    border: 'none'
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    width: '100%',
    color: theme.palette.primary.dark,
    backgroundColor: 'transparent',
  },

  greentext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 14,
    color: 'rgb(0, 150, 32)',
  },

  redtext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 14,
    color: 'rgb(230, 47, 69)',
  },

  row: {
    width: '100%',
    margin: '0 auto',
    padding: '0.3em',
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
  container: {
    color: '#d2bde8',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.graidiertTwo,
    margin: '14px auto',
    maxWidth: '400px',
  },
}));

export default function HomeTabMobile() {
  const dispatch = useDispatch();
  const s = useStyles();
  const theme = useTheme();

  const [itemSort, setItemSort] = useState([]);
  const [isOn, toggleIsOn] = useToggle();
  const [open, setOpen] = useState(false);
  const [transactionForEdit, setTransactionForEdit] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const transactionList = useSelector(transactionsSelectors.filterTransactions);
  
  const totalTransactions = useSelector(
    transactionsSelectors.totalTransactions,
  );

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
    useEffect(() => {
    setItemSort(transactionList);
  }, [transactionList]);

  function deleteT(id) {
    deleteTransaction(id);
  }

  const OnEditTransaction = ({ id, date, income, category, comment, sum }) => {
    setTransactionForEdit({ id, date, income, category, comment, sum });
    handleClickOpen();
    fetchTransactions();
  };

  const sortByUp = value => {
    const lodash = sortBy(transactionList, [
      function (o) {
        return o[value];
      },
    ]);
    setItemSort(lodash);
  };

  const sortByDown = value => {
    const lodash = sortBy(transactionList, [
      function (o) {
        return o[value];
      },
    ]);
    setItemSort(lodash.reverse());
  };

  function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }


  function getRandomColor() {
    const color = theme.palette.arrColors;
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  }

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 5));
    setPage(0);
  };

  return (
    <>
      <TableContainer className={s.cont}>
        <Table className={s.table}>
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
        <>
          {(rowsPerPage > 0
                  ? itemSort.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : itemSort
                ).map(
            ({ id, date, income, category, comment, sum, balance }) => (
              <TableRow>
                <TableContainer key={id} className={s.container}>
                <Table>
                  <TableBody>
                    <TableCell
                      style={{
                        width: '7px',
                        backgroundColor: getRandomColor(),
                        padding: '10px',
                        borderBottom: 0,
                      }}
                    ></TableCell>
                    <TableCell
                      style={{
                        paddingTop: 0,
                        paddingBottom: 0,
                        borderBottom: 0,
                      }}
                    >
                      <TableRow className={s.row}>
                        <TableCell className={s.head} align="left">
                                  Date
                                   <button
                  type="button"
                  style={{
                    border: 'none',
                    width: '10px',
                    padding: '4px 8px 0 8px',
                    color: 'white',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                  }}
                  className={isOn ? 'btn' : 'hidden'}
                  onClick={() => {
                    sortByUp('date');
                    toggleIsOn();
                  }}
                >
                  {' '}
                  🠕
                </button>
                <button
                  type="button"
                  style={{
                    border: 'none',
                    width: '10px',
                    padding: '4px 8px 0 8px',
                    cursor: 'pointer',
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}
                  className={!isOn ? 'btn' : 'hidden'}
                  onClick={() => {
                    sortByDown('date');
                    toggleIsOn();
                  }}
                >
                  {' '}
                  🠗
                </button>
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
                      <TableRow style={{ padding: '5px', borderBottom: 0 }}>
                        <TableCell
                          align="left"
                          style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderBottom: 0,
                          }}
                        >
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
                        <TableCell
                          align="right"
                          style={{
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderBottom: 0,
                          }}
                        >
                          <IconButton aria-label="delete">
                            <DeleteIcon onClick={() => deleteT(id)} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableBody>
                </Table>
              </TableContainer>
              </TableRow>
            ),
          )}
        </>
          )}
          <TableFooter className={s.tablehead}>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5]}
                    count={transactionList !== [] && totalTransactions}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
        </Table>
      </TableContainer>
      <TransitionsModal open={open} handleClickOpen={handleClickOpen}>
        <EditTransaction
          handleClickOpen={handleClickOpen}
          transactionForEdit={transactionForEdit}
        />
        </TransitionsModal>
        
    </>
  );
}
