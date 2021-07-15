import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    color: '#212121',
    background: 'radial-gradient( transparent, rgba(255, 254, 254, 0.8))',
    border: '2px solid #212121',
    position: 'fixed',
    bottom: "7vh",
    right: '2vw'
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
