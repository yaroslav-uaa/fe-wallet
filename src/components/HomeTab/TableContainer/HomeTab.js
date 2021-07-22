import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import HomeTabMobile from '../TableComponents/HomeTabMobile';
import HomeTabLarge from '../TableComponents/HomeTabLarge';

 
import { useSelector, useDispatch } from 'react-redux';

import {
  transactionsOperations,
  transactionsSelectors,
} from '../../../redux/transaction';
import sortBy from 'lodash.sortby';


function HomeTab() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md),
  );

  const [itemSort, setItemSort] = useState([]);
  const [isOn, toggleIsOn] = useToggle();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [transactionForEdit, setTransactionForEdit] = useState(null);

  const transactionList = useSelector(transactionsSelectors.filterTransactions);
  const totalTransactions = useSelector(
    transactionsSelectors.totalTransactions,
  );

  const deleteTransaction = useCallback(
    id => dispatch(transactionsOperations.deleteTransaction(id)),
    [dispatch],
  );

  const fetchTransactions = useCallback(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  useEffect(() => fetchTransactions(), [fetchTransactions]);
  useEffect(() => {
    setItemSort(transactionList);
  }, [transactionList]);

  const sorting = (value) => {
     const lodash = sortBy(transactionList, [
      function (o) {
        return o[value];
      },
     ]);
    setItemSort(lodash)
  }
  
  const sortByUp = (value) => {
    sorting(value.reverse)
  };
    const sortByDown = (value) => {
    sorting(value)
  };
  
  function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const deleteT = id => {
    deleteTransaction(id);
    fetchTransactions();
    return handleChangePage;
  };

  const OnEditTransaction = ({ id, date, income, category, comment, sum }) => {
    setTransactionForEdit({ id, date, income, category, comment, sum });
    handleClickOpen();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = () => {
    setOpen(!open);
    fetchTransactions();
    return handleChangePage;
  };

  return <>{
    isMobile
    ? <HomeTabMobile
      toggleIsOn={toggleIsOn}
      setPage={setPage}
      isOn={isOn}
      open={open}
      itemSort={itemSort}
      useToggle={useToggle}
      totalTransactions={totalTransactions}
      transactionList={transactionList}
      transactionForEdit={transactionForEdit}
      deleteT={deleteT}
      fetchTransactions={fetchTransactions}
      sortByUp={sortByUp}
      sortByDown={sortByDown}
      handleClickOpen={handleClickOpen}
      OnEditTransaction={OnEditTransaction}
      handleChangePage={handleChangePage}
      page={page}/>
    : <HomeTabLarge
      toggleIsOn={toggleIsOn}
      setPage={setPage}
      isOn={isOn}
      open={open}
      itemSort={itemSort}
      useToggle={useToggle}
      totalTransactions={totalTransactions}
      transactionList={transactionList}
      transactionForEdit={transactionForEdit}
      deleteT={deleteT}
      fetchTransactions={fetchTransactions}
      sortByUp={sortByUp}
      sortByDown={sortByDown}
      handleClickOpen={handleClickOpen}
      OnEditTransaction={OnEditTransaction}
      handleChangePage={handleChangePage}
      page={page}
    />}
  </>;
}

export default HomeTab;