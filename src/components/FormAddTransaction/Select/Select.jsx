
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  inputRoot:{
    background: 'inherit',
    padding: '5px',
    minWidth: '380px',
    color:'#5515a8'
  },
  input: {
    width: '100%',
    color: '4c0085',
    backgroundColor:'inherit'
  },
  option: {
    backgroundColor: '4c0085',
    width: '100%',
     borderBottom: "1px solid #5515a8",
  },
  options:{
    backgroundColor:'#5515a8'
  }


 
 
});


export default function Select({ listCategory, handleInput }) {
   const styles = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      options={listCategory}
      getOptionLabel={(listCategory) => listCategory}
      onChange={handleInput}
      classes={{ ...styles }}
      className={styles.option}
     
      renderInput={(params) => <TextField {...params} label="Category"  />}
    />
  );
}


