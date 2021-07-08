import React from 'react';
import HomeTab from '../../components/HomeTab/HomeTab.js';
import SideBar from '../../components/SideBar';

const DashboardPage = () => {
  return (
    <div className="page">
      <SideBar />
      <HomeTab />
    </div>
  );
};

export default DashboardPage;
