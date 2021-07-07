import React from 'react';
import s from './Loader.module.css';

function Loader() {
  return (
    <div>
      <div className={s.Loader} data-text="Wallet">
        <span className={s.Loader__Circle}></span>
        <span className={s.Loader__Circle}></span>
        <span className={s.Loader__Circle}></span>
        <span className={s.Loader__Circle}></span>
      </div>
    </div>
  );
}

export default Loader;
