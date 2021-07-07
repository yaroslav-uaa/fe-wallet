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
import React, { useState, useEffect } from 'react';
import TablePaginationActions from './HomeTabPagination';
import { useTheme, makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeTabMobile from './HomeTabMobile';

import { transactionsOperations, transactionsSelectors } from '../../redux/transaction';
import { useSelector, useDispatch } from 'react-redux';
// import sortBy from 'lodash.sortby';
// import TableSortLabel from '@material-ui/core/TableSortLabel';


const useStyles = makeStyles(theme => ({
  head: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    color: theme.palette.primary.dark,
    backgroundColor: 'rgba(53%, 4%, 98%, 0.6);',
    fontSize: 17,
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
    fontSize: 16, 
  },
  container: {
    background: theme.palette.background.gradient,
    width: 'fit-content',
    margin: 'auto',
    boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)', 
  },
  table: {
    color:   theme.palette.primary.light,
    borderCollapse: 'collapse',
  }
}));

function HomeTab() {
    const dispatch = useDispatch();

  const { filterTransactions } = transactionsSelectors;

  const transactions = useSelector(filterTransactions);

  useEffect(() => dispatch(transactionsOperations.getTransactions()), [dispatch])

  // const items = useSelector(selectors.getVisibleTransaction);
  // const [setItemSort] = useState([]);
  // useEffect(() => {
  //   setItemSort({ transactions });
  // });
  // const sortByUp = value => {
  //   const lodash = sortBy(items, [
  //     function (o) {
  //       return o[value];
  //     },
  //   ]);
  //   setItemSort(lodash);
  // };

  // const sortByDown = value => {
  //   const lodash = sortBy(items, [
  //     function (o) {
  //       return o[value];
  //     },
  //   ]);
  //   setItemSort(lodash.reverse());
  // };


  const s = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md),
  ); 
  const isDesktop = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.lg),
  );  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 5));
    setPage(0);
  };
  return (
    <>
      {isMobile ? (
        <HomeTabMobile
          transactions={transactions}
        />
      ) : ( isDesktop ? (
          <TableContainer className={s.container} component={Paper}>
          <Table className={s.table} aria-label="a dense table">
            <TableHead>
              <TableRow className={s.row} >
                  <TableCell className={s.head} align="center">Date
                    {/* <button type="button" onClick={() => sortByUp('id')}>
                +
              </button>  <button type="button" onClick={() => sortByDown('id')}>
                -
                    </button> */}
                  </TableCell>
                <TableCell className={s.head} align="center">Type</TableCell>
                <TableCell className={s.head} align="center">Category</TableCell>
                <TableCell className={s.head} align="center">Comment</TableCell>
                <TableCell className={s.head} align="center">Sum</TableCell>
                <TableCell className={s.head} align="center">Balance</TableCell>
              </TableRow>
            </TableHead>
            {transactions === null ? (
              <TableRow className={s.row} align="center">No transactions yet</TableRow>
            ) : (
              <>
                <TableBody>
                  {(rowsPerPage > 0
                    ? transactions.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    : transactions
                  ).map(transaction => (
                    <TableRow className={s.row} key={transaction._id}>
                      <TableCell className={s.text} align="center">
                        {transaction.date}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {transaction.type}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {transaction.category}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {transaction.comment}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {transaction.sum}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {transaction.balance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                     <TablePagination
                          rowsPerPageOptions={[5,]}
                          count={transactions !== [] && transactions.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                          }} 
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </>
            )}
          </Table>
          </TableContainer>)
          : (<TableContainer className={s.container} component={Paper}>
          <Table className={s.container} aria-label="a dense table">
            <TableHead>
              <TableRow className={s.row}>
                <TableCell className={s.head} align="center">Date</TableCell>
                <TableCell className={s.head} align="center">Type</TableCell>
                <TableCell className={s.head} align="center">Category</TableCell>
                <TableCell className={s.head} align="center">Comment</TableCell>
                <TableCell className={s.head} align="center">Sum</TableCell>
                <TableCell className={s.head}align="center">Balance</TableCell>
              </TableRow>
            </TableHead>
            {transactions === null ? (
              <TableRow align="center">No transactions yet</TableRow>
            ) : (
              <>
                <TableBody>
                  {(rowsPerPage > 0
                    ? transactions.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    : transactions
                  ).map(transaction => (
                    <TableRow  key={transaction._id}>
                      <TableCell className={s.text}  align="center">
                        {transaction.date}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {transaction.type}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {transaction.category}
                      </TableCell>
                      <TableCell  className={s.text} align="center">
                        {transaction.comment}
                      </TableCell>
                      <TableCell className={s.text}   align="center">
                        {transaction.sum}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {transaction.balance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[5,]}
                          count={transactions !== [] && transactions.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                          }} 
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </>
            )}
          </Table>
        </TableContainer>)
    
      )}
    </>
  )
}

export default HomeTab;
