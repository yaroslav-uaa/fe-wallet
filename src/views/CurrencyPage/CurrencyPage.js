import React from 'react';
import Currency from '../../components/Currency/Currency';
import Header from '../../components/Header';
function CurrencyPage() {
  return (
    <>
      <Header />
      <div className="page">
        <Currency />
      </div>
    </>
  );
}

export default CurrencyPage;
