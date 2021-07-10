import React from 'react';
import Header from '../../components/Header/Header.js';
import HomeTab from '../../components/HomeTab/HomeTab.js';
import SideBar from '../../components/SideBar';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <HomeTab />
      </div>
    </>
  );
};

export default DashboardPage;
