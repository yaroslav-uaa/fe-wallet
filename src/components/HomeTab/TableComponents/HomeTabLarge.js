import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import moment from 'moment';

import TablePaginationActions from './HomeTabPagination';
import EditTransaction from '../EditTransaction';
import TransitionsModal from '../../Modal';

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
    fontSize: 14,
    textAlign: 'center',
    borderBottom: '2px solid rgba(224, 224, 224, 1)',
    borderCollapse: 'collapse',
  },
  row: {
    width: '65%',
    padding: '0.3em',
    color: theme.palette.primary.light,
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 14,
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

  container: {
    width: 'fit-content',
    margin: 'auto',
  },
  table: {
    color: theme.palette.primary.light,
    borderCollapse: 'collapse',
    width: '100%',
    // maxWidth: '780px',
  },

  tablebody: {
    backgroundColor: '#fffefed1',
  },
}));

export default function HomeTabLarge({
  setPage,
  page,
  open,
  OnEditTransaction,
  deleteT,
  itemSort,
  totalTransactions,
  transactionList,
  transactionForEdit,
  sortByUp,
  sortByDown,
  isOn,
  toggleIsOn,
  handleClickOpen,
  handleChangePage, }) {
  const s = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, itemSort.length - page * rowsPerPage);

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

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
                        style={{ fontSize: 14 }}
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
                          <IconButton
                            aria-label="delete"
                            onClick={() => deleteT(id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ),
                )}

                {emptyRows > 0 && (
                  <TableRow
                    className={s.row}
                    style={{ height: 30 * emptyRows }}
                  >
                    <TableCell colSpan={10} />
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
      <TransitionsModal open={open} handleClickOpen={handleClickOpen}>
        <EditTransaction
          handleClickOpen={handleClickOpen}
          transactionForEdit={transactionForEdit}
        />
      </TransitionsModal>
    </>
  );
}