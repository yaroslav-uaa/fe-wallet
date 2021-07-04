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
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    width: 'fit-content',
    maxHeight: '60vh',
    display: 'flex',
    color: 'red',
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.dark,
    fontSize: 16,
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    width: '65%',
    padding: '0.5em',
    backgroundColor: theme.palette.action.selected,
  },
}))(TableRow);

function HomeTab({ transactions }) {
  const s = useStyles();
  //   const [history, setHistory] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //   useEffect(() => {
  //     const allHistory = JSON.parse(localStorage.getItem('history'));
  //     console.log(allHistory);
  //     setHistory(allHistory);
  //   }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 5));
    setPage(0);
  };

  return (
    <>
      <TableContainer className={s.table} component={Paper}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Дата</StyledTableCell>
              <StyledTableCell align="center">Тип</StyledTableCell>
              <StyledTableCell align="center">Категория</StyledTableCell>
              <StyledTableCell align="center">Комментарий</StyledTableCell>
              <StyledTableCell align="center">Сумма</StyledTableCell>
              <StyledTableCell align="center">Баланс</StyledTableCell>
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
                    rowsPerPageOptions={[5, 10, 20, 30]}
                    count={transactions !== [] && transactions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    labelRowsPerPage="Transactions per page:"
                    onChangePage={handleChangePage}
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

export default HomeTab;
