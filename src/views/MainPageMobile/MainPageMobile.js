import React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router';
import Header from '../../components/Header';
import HomeTab from '../../components/HomeTab/HomeTab';
import SideBar from '../../components/SideBar';
import Stats from '../../components/Stats/Stats';
import CurrencyPage from '../CurrencyPage/CurrencyPage';
import UserPage from '../UserPage/UserPage';

function MainPageMobile() {
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense>
            <Route path="/main" exact component={HomeTab} />
            <Route path="/stats" exact component={Stats} />
            <Route path="/user" component={UserPage} />
            <Route path="/currency" exact component={CurrencyPage} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPageMobile;
