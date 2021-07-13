import React from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router';
import HomeTab from '../../components/HomeTab/HomeTab';
import SideBar from '../../components/SideBar';
import Stats from '../../components/Stats/Stats';
import UserPage from '../UserPage/UserPage';

function MainPage() {
  return (
    <div className="page">
      <div className="sidebar__gl">
        <SideBar />
      </div>
      <div className="content">
        <Suspense>
          <Route path="/main" exact component={HomeTab} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/user" component={UserPage} />
        </Suspense>
      </div>
    </div>
  );
}

export default MainPage;
