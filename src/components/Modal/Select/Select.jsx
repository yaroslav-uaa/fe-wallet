import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
    color: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: 'white',
  },
  padding: {
    padding: '0px',
  },
}));

export default function SimpleSelect({ isIncome, category, handleChange }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          className={classes.select}
        >
          {isIncome ? createSelect(rangesExpense) : createSelect(rangesIncome)}
        </Select>
      </FormControl>
    </div>
  );
}

function createSelect(array) {
  return array.map(option => {
    return (
      <MenuItem
        key={option.value}
        value={option.value}
        width="100%"
        color="red"
      >
        {option.label}
      </MenuItem>
    );
  });
}

const rangesExpense = [
  {
    value: 'Basic',
    label: 'Basic',
  },
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Auto',
    label: 'Auto',
  },
  {
    value: 'Development',
    label: 'Development',
  },
  {
    value: 'Children',
    label: 'Children',
  },
  {
    value: 'House',
    label: 'House',
  },
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'The other',
    label: 'The other',
  },
];

const rangesIncome = [
  {
    value: 'Regular income',
    label: 'Regular income',
  },
  {
    value: 'Non-regular income',
    label: 'Non-regular income',
  },
];
