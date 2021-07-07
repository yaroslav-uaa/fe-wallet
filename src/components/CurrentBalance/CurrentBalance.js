import React, { useState } from 'react';
import s from './CurrentBalance.module.css';

function CurrentBalance() {
  // const [balance, setBalance] = useState(0);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className={s.container}>
      <p className={s.title}>balance:</p>
      <p className={s.balance}>&#8372; 24000, 00</p>
    </div>
  );
}

export default CurrentBalance;
