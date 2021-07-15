import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { SwatchesPicker } from 'react-color';
import Profile from '../../components/Users/Profile/Profile';
import s from './UserPage.module.css';
import Picker from '../../components/Picker/Picker';

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
      styles={{
        background: 'rgba(225, 218, 233, 0.521)',
        borderRadius: '20px',
      }}
    >
      <div className={s.box_page}>
        <div className={s.page_profile}>
          <Profile />
        </div>
        <div
          style={{
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#fffefe ',
            paddingBottom: '30px',
          }}
        >
          <p>Choose Your Theme: </p>
          <SwatchesPicker
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
    </div>
  );
}

export default UserPage;
