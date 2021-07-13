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

import TransitionsModal from './EditTransaction/ModalTransaction';
import EditTransaction from './EditTransaction';
import EditIcon from '@material-ui/icons/Edit';
import sortBy from 'lodash.sortby';
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  tablehead: {
    backgroundImage:
      'linear-gradient(to right,  rgba(49, 45, 45, 0.8), rgba(49, 45, 45, 0.2), rgba(49, 45, 45, 0.8))',
  },

  head: {
    width: '16%',
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontSize: 17,
    textAlign: 'center',
    // textShadow: '2px 2px 3px grey',
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

  greentext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 15,
    color: 'rgb(0, 150, 32)',
  },

  redtext: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 15,
    color: 'rgb(230, 47, 69)',
  },

  container: {
    width: 'fit-content',
    margin: 'auto',
  },
  table: {
    color: theme.palette.primary.light,
    borderCollapse: 'collapse',
    maxWidth: '100%',
  },

  tablebody: {
    backgroundColor: '#fffefed1',
  },
}));

export default function HomeTabLarge() {
  const s = useStyles();
  const dispatch = useDispatch();
  const deleteTransaction = useCallback((id) => dispatch(transactionsOperations.deleteTransaction(id)), [dispatch]);
  const fetchTransactions = useCallback(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  const transactionList = useSelector(transactionsSelectors.filterTransactions);
  const totalTransactions = useSelector(
    transactionsSelectors.totalTransactions,
  );

  const [itemSort, setItemSort] = useState([]);
  const [isOn, toggleIsOn] = useToggle();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [transactionForEdit, setTransactionForEdit] = useState(null);

  useEffect(() => fetchTransactions(), [fetchTransactions]);
  useEffect(() => {
    setItemSort(transactionList);
  }, [transactionList]);

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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, itemSort.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  

    const [transactionForEdit, setTransactionForEdit] = useState(null);
    
    const OnEditTransaction = ({ id, date, income, category, comment, sum,  }) => {
      setTransactionForEdit({ id, date, income, category, comment, sum,  });
      console.log({ id, date, income, category, comment, sum,  })

      handleClickOpen();
  };
   const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
    return handleChangePage
  };

  const OnEditTransaction = ({ id, date, income, category, comment, sum,  }) => {
    setTransactionForEdit({ id, date, income, category, comment, sum,  });
    handleClickOpen();
  };

  
  function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }
  function deleteT(id) {
    deleteTransaction(id)
    return handleChangePage
  }

  return (
    <>
      <TableContainer className={s.container}>
        <Table className={s.table} aria-label="a dense table">
          <TableHead className={s.tablehead}>
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
                    padding: '0 8px',
                    cursor: 'pointer',
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
               <TableCell className={s.head} align="center">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          {transactionList.length === 0 ? (
            <caption
              className={s.row}
              style={{
                height: '150px',
                margin: '100px auto',
                fontSize: '20px',
                width: '350px',
                color: 'black',
                textAlign: 'center',
              }}
              align="center"
            >
              No transactions yet
            </caption>
          ) : (
            <>
              <TableBody className={s.tablebody}>
                {(rowsPerPage > 0
                  ? itemSort.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : itemSort
                ).map(
                  ({ id, date, income, category, comment, sum, balance }) => (
                    <TableRow className={s.row} key={id}>
                      <TableCell
                        className={s.text}
                        style={{ fontSize: 16 }}
                        align="center"
                      >
                        {moment(date).format('DD.MM.YYYY')}
                      </TableCell>
                      <TableCell
                        className={income ? s.greentext : s.redtext}
                        align="center"
                      >
                        {income ? 'income' : 'expenses'}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {category}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {comment}
                      </TableCell>
                      <TableCell
                        className={income ? s.greentext : s.redtext}
                        align="center"
                      >
                        {income ? `+${sum}` : `-${sum}`}
                      </TableCell>
                      <TableCell className={s.text} align="center">
                        {balance}
                      </TableCell>
                    <TableCell className={s.text} align="center">
                      <div style={{ display: 'flex', height: 'inherit' }}>
                        <IconButton
                          onClick={() =>
                            OnEditTransaction({
                              id, date, income, category, comment, sum, 
                            })
                          }
                        >
                          <EditIcon />
                        </IconButton>
                      <IconButton aria-label="delete">
                          <DeleteIcon
                            onClick={() => deleteT(id) }
                          />
                      </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 30 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter className={s.tablehead}>
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
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </>
          )}
        </Table>      
      </TableContainer>
      <TransitionsModal open={open}  handleClickOpen={handleClickOpen} >
        <EditTransaction  handleClickOpen={handleClickOpen} transactionForEdit={transactionForEdit}  />
      </TransitionsModal>
    </>
  );
}