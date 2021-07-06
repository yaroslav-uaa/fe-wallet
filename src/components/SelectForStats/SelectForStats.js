import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './SelectForStats.module.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    margin: theme.spacing(0),
    minWidth: 280,
    minHeight: 58,
    background: 'white',
    borderRadius: 29,
  },
  select: {},
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderBottom: 'none',
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [mounts, setMounth] = React.useState('');
  const [age, setAge] = React.useState('');

  React.useEffect(() => {
    // делает запрос на сервер с данными mounts и age если такие выбраны
    console.log(mounts);
    console.log(age);
  }, [mounts, age]);

  const handleChangeMounth = event => {
    setMounth(event.target.value);
  };

  const handleChangeAge = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={styles.selectMounth}>
        <Select
          value={mounts}
          onChange={handleChangeMounth}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Mounth</em>
          </MenuItem>
          <MenuItem value={'January'}>January</MenuItem>
          <MenuItem value={'February'}>February</MenuItem>
          <MenuItem value={'March'}>March</MenuItem>
          <MenuItem value={'April'}>April</MenuItem>
          <MenuItem value={'May'}>May</MenuItem>
          <MenuItem value={'June'}>June</MenuItem>
          <MenuItem value={'July'}>July</MenuItem>
          <MenuItem value={'August'}>August</MenuItem>
          <MenuItem value={'September'}>September</MenuItem>
          <MenuItem value={'October'}>October</MenuItem>
          <MenuItem value={'November'}>November</MenuItem>
          <MenuItem value={'December'}>December</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={styles.selectMounth}>
        <Select
          value={age}
          onChange={handleChangeAge}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Age</em>
          </MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
