import React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router';
import Header from '../../components/Header';
import HomeTab from '../../components/HomeTab/HomeTab';
import SideBar from '../../components/SideBar';
import Stats from '../../components/Stats/Stats';
import UserPage from '../UserPage/UserPage';

function MainPage() {
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense>
            <Route path="/" exact component={HomeTab} />
            <Route path="/stats" exact component={Stats} />
            <Route path="/user" exact component={UserPage} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPage;
