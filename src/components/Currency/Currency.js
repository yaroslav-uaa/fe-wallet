import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import f from './Currency.module.css';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles({
  table: {
    minWidth: 280,
    maxWidth: 357,
    maxHeight: 180,
    borderRadius: 6,
    boxShadow: ' 0 3px 10px -2px #212121',
  },

  head: {
    background:
      'linear-gradient(to right,  rgba(49, 45, 45, 0.8), rgba(49, 45, 45, 0.2), rgba(49, 45, 45, 0.8))',
  },

  headers: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 10,
    color: '#fffefe',
  },

  body: {
    background: 'rgba(255, 254, 254, 0.8)',
  },

  currency: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgb(19, 60, 90)',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buy: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(0, 130, 32)',
  },

  sale: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'rgb(212, 47, 69)',
  },
});

function Currency() {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 1280 });
  const s = useStyles();
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = JSON.parse(sessionStorage.getItem('currency'));
        setCurrency(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className={f.sidebar}>
        <TableContainer className={s.table}>
          {!currency ? (
            <Skeleton
              style={{
                background:
                  'linear-gradient(to right,  rgba(49, 45, 45, 0.8), rgba(49, 45, 45, 0.2), rgba(49, 45, 45, 0.8))',
              }}
              duration={3}
              width={isDesktopOrTablet ? 357 : 280}
              height={174}
            />
          ) : (
            <Table size="small" aria-label="a dense table">
              <TableHead className={s.head}>
                <TableRow>
                  <TableCell color="secondary" className={s.headers}>
                    Currency
                  </TableCell>
                  <TableCell align="center" className={s.headers}>
                    Buy
                  </TableCell>
                  <TableCell align="center" className={s.headers}>
                    Sale
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className={s.body}>
                {currency?.map(el => (
                  <TableRow key={el.ccy}>
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
          )}
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
