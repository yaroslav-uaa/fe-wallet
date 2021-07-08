import React, { useState } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SelectCategoryIncome = () => {
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
        <MenuItem value={0}>Regular income</MenuItem>
        <MenuItem value={1}>Non-regular income</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCategoryIncome;
