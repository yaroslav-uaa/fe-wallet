import React, { lazy } from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

// views
const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));
const StatsPage = lazy(() => import('../StatsPage/StatsPage'));
const UserPage = lazy(() => import('../UserPage/UserPage'));
const CurrencyPage = lazy(() => import('../CurrencyPage/CurrencyPage'));

function MainPageMobile() {
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/stats" exact component={StatsPage} />
            <Route path="/user" exact component={UserPage} />
            <Route path="/currency" exact component={CurrencyPage} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPageMobile;
