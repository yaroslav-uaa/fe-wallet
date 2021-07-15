import React, { useEffect } from 'react';
import { fetchInfo } from '../../services/currencyExchange';

function GetCurrency() {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInfo();
        const slicedData = data.slice(0, -1);
        sessionStorage.setItem('currency', JSON.stringify(slicedData));
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  // useEffect(() => {
  //   fetchInfo()
  //     .then(data => data.slice(0, -1))
  //     .then(r => sessionStorage.setItem('currency', JSON.stringify(r)));
  // }, []);
  return <div></div>;
}

export default GetCurrency;
