import React, { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../ViewsAnimate.css';

// views
const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));
const StatsPage = lazy(() => import('../StatsPage/StatsPage'));
const UserPage = lazy(() => import('../UserPage/UserPage'));
const CurrencyPage = lazy(() => import('../CurrencyPage/CurrencyPage'));

function MainPageMobile() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense>
            <TransitionGroup>
              <CSSTransition
                timeout={500}
                classNames="view"
                key={location.key}
                unmountOnExit
              >
                <Switch location={location}>
                  <Route path="/" exact component={DashboardPage} />
                  <Route path="/stats" exact component={StatsPage} />
                  <Route path="/user" exact component={UserPage} />
                  <Route path="/currency" exact component={CurrencyPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPageMobile;
