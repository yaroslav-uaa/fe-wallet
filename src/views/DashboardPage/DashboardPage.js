import React from 'react';
import HomeTabMobile from '../../components/HomeTab/HomeTabMobile.js';
import transactions from '../../transaction.json';
import SideBar from '../../components/SideBar';

const DashboardPage = () => {
  return (
    <div className="dashBoardPage">
      <SideBar />
      <HomeTabMobile transactions={transactions} />
    </div>
  );
};

export default DashboardPage;
