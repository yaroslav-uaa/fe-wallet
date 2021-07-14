import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

const defaultColor = localStorage.getItem('color') || '#212121';

function UserPage() {
  const [color, setcolor] = useState('');

  useEffect(() => {
    setcolor(defaultColor);
  }, []);
  const handleChangeComplete = color => {
    setcolor(color.hex);
    localStorage.setItem('color', color.hex);
  };

  return (
    <div
      className="page"
      style={{ background: '#fffefe', paddingBottom: '30px' }}
    >
      <div
        style={{
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p>Choose Your Theme: </p>
        <SketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
          style={{ marginBottom: '49px' }}
        />

        <div
          style={{
            backgroundColor: `${color}`,
            width: '100px',
            height: '50px',
            color: '#fffefe',
            fontFamily: 'Gugi',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0',
            border: '3px solid #fffefe',
            boxShadow: '0 0 0 2px #212121',
          }}
        >
          WALLET
        </div>

        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default UserPage;
