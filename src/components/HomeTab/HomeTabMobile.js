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
import TablePaginationActions from './HomeTabPaginationMobile';
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



function HomeTabMobile({ transactions }) {
  const s = useStyles();
  //   const [history, setHistory] = useState([]);
  const [page, setPage] = useState(0);
  const [colsPerPage, setColsPerPage] = useState(1);

  //   useEffect(() => {
  //     const allHistory = JSON.parse(localStorage.getItem('history'));
  //     console.log(allHistory);
  //     setHistory(allHistory);
  //   }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeColsPerPage = e => {
    setColsPerPage(parseInt(e.target.value, 2));
    setPage(0);
  };

  return (
    <>
      {/* <TableContainer className={s.table} component={Paper}> */}
       
          {transactions === null ? (
            <p>No transactions yet</p>
          ) : (
            <>
              {transactions.map(transaction => (
                     <TableContainer  style={{margin: 'auto'}} className={s.table} component={Paper}>
                      <div style={{display: 'flex', flexDirection: 'column', width: '70vw'}}  >
                           <Table key={transaction._id}> 
                                      <TableBody>
                                          <StyledTableRow>
                                              <StyledTableCell>
                                                  Date
                                              </StyledTableCell>
                                              <StyledTableCell>
                                                  {transaction.date}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              <StyledTableCell>
                                                  type
                                              </StyledTableCell>
                                              <StyledTableCell>
                                                  {transaction.type}
                                              </StyledTableCell>
                                          </StyledTableRow>

                                          <StyledTableRow>
                                              <StyledTableCell>
                                                  Categoty
                                              </StyledTableCell>
                                              <StyledTableCell>
                                                  {transaction.category}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              <StyledTableCell>
                                                  Comm
                                              </StyledTableCell>
                                              <StyledTableCell>
                                                  {transaction.comment}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              <StyledTableCell>
                                                  Sum
                                              </StyledTableCell>
                                              <StyledTableCell>
                                                  {transaction.sum}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                          <StyledTableRow>
                                              < StyledTableCell>
                                                  balance
                                              </StyledTableCell>
                                              < StyledTableCell>
                                                  {transaction.balance}
                                              </StyledTableCell>
                                          </StyledTableRow>
                                      </TableBody>
                                              {/* <TableFooter>
                <TableRow>
                  <TablePagination
                    colsPerPageOptions={[5, 10, 20, 30]}
                    count={transactions !== [] && transactions.length}
                    colsPerPage={colsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    labelRowsPerPage="Transactions per page:"
                    onChangePage={handleChangePage}
                    onChangePerPage={handleChangeColsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>    */}
                                  </Table>
                                 </div>
                                    </TableContainer>
                              ))}
            </>
          )}
    
      {/* </TableContainer> */}
    </>
  );
}

export default HomeTabMobile;