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
import React, { useState } from 'react';
import TablePaginationActions from './HomeTabPagination';
import { withStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeTabMobile from './HomeTabMobile'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'transparent' ,
    fontSize: 16,
    fontWeight: 700,
    color: theme.palette.primary.light,
  },
  body: {
    fontSize: 14,
    color: theme.palette.primary.light,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    width: '65%',
    padding: '0.5em',
    color: theme.palette.primary.light,
  },
}))(TableRow);

const StyledTableHead = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(53%, 4%, 98%, 0.6);',
    borderRadius: '50%',
    fontSize: 16,
    textShadow: '2px 2px 3px black',          
    borderCollapse: 'collapse',
  },
}))(TableHead);

const StyledTable = withStyles(theme => ({
  root: {
    margin: '0 auto 20px auto',
    color: theme.palette.primary.light,
    borderCollapse: 'collapse',
  },
}))(Table);

function HomeTab({ transactions }) {
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
          <TableContainer style={{ width: 'fit-content', margin: 'auto', boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)',  backgroundColor: 'transparent' }} component={Paper}>
          <StyledTable aria-label="a dense table">
            <StyledTableHead>
              <TableRow>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Type</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Comment</StyledTableCell>
                <StyledTableCell align="center">Sum</StyledTableCell>
                <StyledTableCell align="center">Balance</StyledTableCell>
              </TableRow>
            </StyledTableHead>
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
                    <StyledTableRow key={transaction._id}>
                      <StyledTableCell align="center">
                        {transaction.date}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.type}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.category}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.comment}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.sum}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.balance}
                      </StyledTableCell>
                    </StyledTableRow>
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
          </StyledTable>
        </TableContainer>) : (<TableContainer style={{width: 'fit-content', boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)',  backgroundColor: 'transparent' }} component={Paper}>
          <StyledTable aria-label="a dense table">
            <StyledTableHead>
              <TableRow>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Type</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Comment</StyledTableCell>
                <StyledTableCell align="center">Sum</StyledTableCell>
                <StyledTableCell align="center">Balance</StyledTableCell>
              </TableRow>
            </StyledTableHead>
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
                    <StyledTableRow key={transaction._id}>
                      <StyledTableCell align="center">
                        {transaction.date}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.type}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.category}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.comment}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.sum}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {transaction.balance}
                      </StyledTableCell>
                    </StyledTableRow>
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
          </StyledTable>
        </TableContainer>)
    
      )}
    </>
  )
}

export default HomeTab;
