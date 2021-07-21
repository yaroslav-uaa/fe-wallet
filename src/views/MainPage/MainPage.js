import React, { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../ViewsAnimate.css';
import { Ripple } from 'react-spinners-css';
// views
const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));
const StatsPage = lazy(() => import('../StatsPage/StatsPage'));
const UserPage = lazy(() => import('../UserPage/UserPage'));

function MainPage() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense
            fallback={
              <Ripple
                color="#fffefe"
                size="100"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
          >
            <TransitionGroup>
              <CSSTransition
                timeout={200}
                classNames="view"
                key={location.key}
                unmountOnExit
              >
                <Switch location={location}>
                  <Route path="/" exact component={DashboardPage} />
                  <Route path="/stats" exact component={StatsPage} />
                  <Route path="/user" exact component={UserPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPage;
