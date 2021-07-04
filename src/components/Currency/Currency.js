import React, { useEffect, useState } from 'react';
import { fetchInfo } from '../../services/currencyExchange';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 280,
    maxWidth: 340,
    maxHeight: 180,
  },

  head: {
    background: 'rgb(232, 227, 228)',
  },

  headers: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 10,
  },

  currency: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgb(50, 104, 168)',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buy: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(73, 166, 50)',
  },

  sale: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(212, 47, 69)',
  },
});

function Currency() {
  const s = useStyles();
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInfo();
        setCurrency(data.slice(0, -1));
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  console.log(currency);

  return (
    <TableContainer component={Paper} className={s.table}>
      <Table size="small" aria-label="a dense table">
        <TableHead className={s.head}>
          <TableRow>
            <TableCell className={s.headers}>Currency</TableCell>
            <TableCell align="center" className={s.headers}>
              Buy
            </TableCell>
            <TableCell align="center" className={s.headers}>
              Sale
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currency.length > 0 &&
            currency.map(el => (
              <TableRow key={el.name}>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  className={s.currency}
                >
                  {el.ccy}
                </TableCell>
                <TableCell align="center" className={s.buy}>
                  {Math.floor(el.buy * 100) / 100}
                </TableCell>
                <TableCell align="center" className={s.sale}>
                  {Math.floor(el.sale * 100) / 100}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Currency;
