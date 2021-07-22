import React, { lazy, useEffect, Suspense } from 'react';
import { Switch, useLocation } from 'react-router';
import PrivateRoute from '../../routes/PrivateRoute';
import { useDispatch } from 'react-redux';

import capitalOperations from '../../redux/capital/operations-capital';
import transactionsOperations from '../../redux/transaction/operations-transactions';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(capitalOperations.getCapital());
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
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
                  top: '70%',
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
                  <PrivateRoute path="/" exact component={DashboardPage} />
                  <PrivateRoute path="/stats" exact component={StatsPage} />
                  <PrivateRoute path="/user" exact component={UserPage} />
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
