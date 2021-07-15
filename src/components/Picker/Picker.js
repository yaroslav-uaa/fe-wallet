import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CompactPicker } from 'react-color';
import s from './Picker.module.css';
const defaultColor = localStorage.getItem('color') || '#212121';

function Picker() {
  const [color, setcolor] = useState('');

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

      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className={s.testColor}
      >
        WALLET
      </div>

      <Button
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
