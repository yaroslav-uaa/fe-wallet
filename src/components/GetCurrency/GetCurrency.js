import React, { useEffect, useState } from 'react';
import { fetchInfo } from '../../services/currencyExchange';

function GetCurrency() {
  const [currency, setCurrency] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInfo();
        const sliced = data.slice(0, -1);
        setCurrency(sliced);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(currency);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await fetchInfo();
  //       const slicedData = data.slice(0, -1);
  //       sessionStorage.setItem('currency', JSON.stringify(slicedData));
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getData();
  // }, []);

  return <div></div>;
}

export default GetCurrency;
