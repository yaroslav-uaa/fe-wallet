import React from 'react';
import HomeTab from '../../components/HomeTab/HomeTab.js';
import transactions from '../../transaction.json';
import SideBar from '../../components/SideBar';

const DashboardPage = () => {

  return (
    <div className="dashBoardPage">
      <SideBar />
      <HomeTab transactions={transactions} />
    </div>
  );
};

export default DashboardPage;
