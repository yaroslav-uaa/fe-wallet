import { useDispatch } from 'react-redux';
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

import { useTheme, makeStyles} from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
 

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


export default function TableComp({ item }) {  
  const s = useStyles();
    return (
      

    <>
                          <TableRow  key={item._id}>
                      <TableCell className={s.text}  align="center">
                        {item.date}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {item.type}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {item.category}
                      </TableCell>
                      <TableCell  className={s.text} align="center">
                        {item.comment}
                      </TableCell>
                      <TableCell className={s.text}   align="center">
                        {item.sum}
                      </TableCell>
                      <TableCell className={s.text}  align="center">
                        {item.balance}
                      </TableCell>
                    </TableRow>
    </>
  );
}