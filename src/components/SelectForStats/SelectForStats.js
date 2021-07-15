import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { deepPurple } from '@material-ui/core/colors';
import styles from './SelectForStats.module.css';

import operationsTransactions from '../../redux/transaction/operations-transactions';
import { useDispatch } from 'react-redux';

const useMinimalSelectStyles = {
  select: {
    minWidth: 200,
    background: 'white',
    color: deepPurple[500],
    fontWeight: 200,
    borderStyle: 'none',
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 24,
    paddingTop: 14,
    paddingBottom: 15,
    boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
    '&:focus': {
      borderRadius: 12,
      background: 'green',
      borderColor: deepPurple[100],
    },
  },
  icon: {
    color: deepPurple[300],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none',
  },
  // paper: {
  //   borderRadius: 12,
  //   marginTop: 8,
  // },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: 'white',
    '& li': {
      fontWeight: 200,
      paddingTop: 12,
      paddingBottom: 12,
    },
    '& li:hover': {
      background: deepPurple[100],
    },
    '& li.Mui-selected': {
      color: 'white',
      background: deepPurple[400],
    },
    '& li.Mui-selected:hover': {
      background: deepPurple[500],
    },
  },
};

const SelectForStats = () => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChangeMonth = event => {
    setMonth(event.target.value);
  };

  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  useEffect(() => {
    dispatch(operationsTransactions.getTransactionsByDate(month + 1, year));
  }, [month, year]);

  const minimalSelectClasses = useMinimalSelectStyles;

  const iconComponent = props => {
    return (
      <ExpandMoreIcon
        className={props.className + ' ' + minimalSelectClasses.icon}
      />
    );
  };

  const menuProps = {
    // classes: {
    //   paper: minimalSelectClasses.paper,
    //   list: minimalSelectClasses.list,
    // },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <div>
      <FormControl className={styles.selectMonth}>
        <Select
          disableUnderline
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={month}
          onChange={handleChangeMonth}
        >
          <MenuItem value={'Month'}>Month</MenuItem>
          <MenuItem value={0}>January</MenuItem>
          <MenuItem value={1}>February</MenuItem>
          <MenuItem value={2}>March</MenuItem>
          <MenuItem value={3}>April</MenuItem>
          <MenuItem value={4}>May</MenuItem>
          <MenuItem value={5}>June</MenuItem>
          <MenuItem value={6}>July</MenuItem>
          <MenuItem value={7}>August</MenuItem>
          <MenuItem value={8}>September</MenuItem>
          <MenuItem value={9}>October</MenuItem>
          <MenuItem value={10}>November</MenuItem>
          <MenuItem value={11}>December</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={styles.selectMonth}>
        <Select
          disableUnderline
          MenuProps={menuProps}
          IconComponent={iconComponent}
          value={year}
          onChange={handleChangeYear}
        >
          <MenuItem value={'Year'}>Year</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectForStats;
