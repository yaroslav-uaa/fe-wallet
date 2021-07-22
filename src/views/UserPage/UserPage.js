import Picker from '../../components/Users/Picker/Picker';
import Profile from '../../components/Users/Profile/Profile';
import s from './UserPage.module.css';
import operationTransaction from '../../redux/transaction/operations-transactions';
import capitalOperations from '../../redux/capital/operations-capital';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function UserPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationTransaction.fetchTransactions());
    dispatch(capitalOperations.getCapital());
  }, [dispatch]);
  return (
    <div className="page">
      <div className={s.box_user}>
        <Profile />
        <Picker />
      </div>
    </div>
  );
}

export default UserPage;
