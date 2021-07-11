import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import TablePaginationActions from './HomeTabPagination';
import { makeStyles } from '@material-ui/core/styles';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transaction';
import sortBy from 'lodash.sortby';

const useStyles = makeStyles(theme => ({
  head: {
    width: '16%',
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    color: theme.palette.primary.dark,
    backgroundColor: 'rgba(53%, 4%, 98%, 0.6);',
    fontSize: 17,
    textAlign: 'center',
    textShadow: '2px 2px 3px grey',
    borderCollapse: 'collapse',
  },
  row: {
    width: '65%',
    padding: '0.5em',
    color: theme.palette.primary.light,
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 15,
  },
  container: {
    background: theme.palette.background.gradient,
    width: 'fit-content',
    margin: 'auto',
    boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)',
  },
  table: {
    color: theme.palette.primary.light,
    borderCollapse: 'collapse',
    maxWidth: '790px',
  },
}));

export default function HomeTabLarge() {
  const s = useStyles();
  const dispatch = useDispatch();

  const fetchTransactions = useCallback(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  useEffect(() => fetchTransactions(), [fetchTransactions]);

  const transactionList = useSelector(transactionsSelectors.filterTransactions);
  const totalTransactions = useSelector(
    transactionsSelectors.totalTransactions,
  );

  const [itemSort, setItemSort] = useState([]);

  useEffect(() => {
    setItemSort(transactionList);
  }, [transactionList]);
  console.log('________', transactionList);

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

  const [isOn, toggleIsOn] = useToggle();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, itemSort.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer className={s.container} component={Paper}>
        <Table className={s.table} aria-label="a dense table">
          <TableHead>
            <TableRow className={s.row}>
              <TableCell
                className={s.head}
                style={{ width: '20%' }}
                align="center"
              >
                Date
                <button
                  type="button"
                  style={{
                    border: 'none',
                    width: '10px',
                    padding: '0 8px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                  }}
                  className={!isOn ? 'btn' : 'hidden'}
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
                    padding: '0 8px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                  }}
                  className={isOn ? 'btn' : 'hidden'}
                  onClick={() => {
                    sortByDown('date');
                    toggleIsOn();
                  }}
                >
                  {' '}
                  🠗
                </button>
              </TableCell>
              <TableCell className={s.head} align="center">
                Type
              </TableCell>
              <TableCell className={s.head} align="center">
                Category
              </TableCell>
              <TableCell className={s.head} align="center">
                Comment
              </TableCell>
              <TableCell className={s.head} align="center">
                Sum
              </TableCell>
              <TableCell className={s.head} align="center">
                Balance
              </TableCell>
            </TableRow>
          </TableHead>
          {transactionList === null ? (
            <TableRow className={s.row} align="center">
              No transactions yet
            </TableRow>
          ) : (
            <>
              <TableBody>
                {(rowsPerPage > 0
                  ? itemSort.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : itemSort
                ).map(({ id, date, income, category, comment, sum, balance }) => (
                  <TableRow className={s.row} key={id}>
                    <TableCell
                      className={s.text}
                      style={{ fontSize: 14 }}
                      align="center"
                    >
                      {date}
                    </TableCell>
                    <TableCell className={s.text} align="center">
                     {income ? 'income' : 'expenses'}
                    </TableCell>
                    <TableCell className={s.text} align="center">
                      {category}
                    </TableCell>
                    <TableCell className={s.text} align="center">
                      {comment}
                    </TableCell>
                    <TableCell className={s.text} align="center">
                      {income ? `+${sum}` : `-${sum}`}
                      
                    </TableCell>
                    <TableCell className={s.text} align="center">
                      {balance}
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 30 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[10, 15, 20]}
                    count={transactionList !== [] && totalTransactions}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
