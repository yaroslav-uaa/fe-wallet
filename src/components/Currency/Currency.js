import React, { useEffect, useState } from 'react';
import { fetchInfo } from '../../services/currencyExchange';
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
import Navigation from '../Navigation';
import f from '../SideBar/SideBar.module.css';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles({
  table: {
    minWidth: 280,
    maxWidth: 340,
    maxHeight: 180,
    borderRadius: 6,
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
    color: '#d2dbe8',
  },

  body: {
    background: 'rgba(255, 255, 255, 0.7)',
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
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktopOrTablet = useMediaQuery({ minWidth: 1280 });
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
    <>
      <div className={f.sidebar}>
        {isTabletOrMobile && <Navigation />}
        <TableContainer className={s.table}>
          {currency.length > 0 ? (
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

              <TableBody className={s.body}>
                {currency.map(el => (
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
          ) : (
            <Skeleton
              style={{
                background:
                  'linear-gradient(to right,  rgba(49, 45, 45, 0.8), rgba(49, 45, 45, 0.2), rgba(49, 45, 45, 0.8))',
              }}
              duration={2.4}
              width={isDesktopOrTablet ? 340 : 280}
              height={174}
            />
          )}
        </TableContainer>
      </div>
    </>
  );
}

export default Currency;
