import React, { useState } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SelectCategoryExpense = () => {
  const [val, setVal] = useState(1);

  const handleChange = event => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = props => {
    return (
      <ExpandMoreIcon
        className={props.className + ' ' + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
      with: '100%',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>Basic</MenuItem>
        <MenuItem value={1}>Food</MenuItem>
        <MenuItem value={2}>Auto</MenuItem>
        <MenuItem value={3}>Development</MenuItem>
        <MenuItem value={0}>Children</MenuItem>
        <MenuItem value={1}>House</MenuItem>
        <MenuItem value={2}>Education</MenuItem>
        <MenuItem value={3}>The rest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCategoryExpense;
