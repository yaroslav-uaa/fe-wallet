import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SelectItem from './SelectItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '97%',
    color: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: 'white',
    background: 'inherit',
  },

  padding: {
    padding: '0px',
  },

  button: {
    background: 'red',
  },
}));

export default function SimpleSelect({ isIncome, category, handleChange }) {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          className={classes.select}
          defaultValue=''
        >
          {isIncome ? SelectItem(rangesExpense) : SelectItem(rangesIncome)}
        </Select>
      </FormControl>
    </>
  );
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
