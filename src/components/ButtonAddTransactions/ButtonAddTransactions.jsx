import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    color: '#8609F9',
    background: '#d2bde8',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonAddTransactions({ openModal }) {
  const classes = useStyles();
  return (
    <>
      <Fab onClick={openModal} aria-label="add" className={classes.margin}>
        <AddIcon />
      </Fab>
    </>
  );
}
