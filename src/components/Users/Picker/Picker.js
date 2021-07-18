import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CompactPicker } from 'react-color';
import s from './Picker.module.css';
const defaultColor = localStorage.getItem('color') || '#212121';

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.palette.primary.dark,
    background: 'linear-gradient(60deg, #212121d0, #fffefe90, #212121d0)',
    marginTop: '35px',
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
}));

function Picker() {
  const [color, setcolor] = useState('');
  const stlz = useStyles();

  useEffect(() => {
    setcolor(defaultColor);
  }, []);
  const handleChangeComplete = color => {
    setcolor(color.hex);
    localStorage.setItem('color', color.hex);
  };

  return (
    <div className={s.wrap}>
      <p>Choose Your Theme: </p>
      <CompactPicker
        color={color}
        onChangeComplete={handleChangeComplete}
        style={{ marginBottom: '49px' }}
      />

      <Button
        size="medium"
        className={stlz.button}
        variant="contained"
        color="secondary"
        onClick={() => {
          window.location.reload();
        }}
      >
        Save Changes
      </Button>
    </div>
  );
}

export default Picker;
