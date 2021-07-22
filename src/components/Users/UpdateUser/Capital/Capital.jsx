import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import operations from '../../../../redux/capital/operations-capital';
import getCapital from '../../../../redux/capital/selectors-capital';
import operationTransactions from '../../../../redux/transaction/operations-transactions';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useMediaQuery } from 'react-responsive';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import s from '../../Profile/Profile.module.css';

export default function Capital() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();
  const initialCapital = useSelector(getCapital);
  const [showInput, setShowInput] = useState(false);
  const [capital, setCapital] = useState(initialCapital);

  const openCapitalUpdate = () => {
    setShowInput(true);
  };

  const closeCapitalUpdate = () => {
    setShowInput(false);
  };

  useEffect(() => {
    setCapital(initialCapital);
  }, [initialCapital]);

  const handleInput = useCallback(evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setCapital({ [name]: Number(value) });
  }, []);

  const updateCapital = useCallback(
    data => {
      dispatch(operations.addCapital(data));
    },
    [dispatch],
  );

  const onSubmitCapital = () => {
    updateCapital(capital);
    closeCapitalUpdate();
    setTimeout(() => dispatch(operationTransactions.fetchTransactions()), 1000);
  };

  return (
    <>
      <MonetizationOnIcon
        color="primary"
        fontSize={isTabletOrMobile ? 'small' : 'medium'}
        style={{ marginLeft: '10px' }}
      />
      {!showInput ? (
        <p className={s.profile_name}>{capital.sum && capital.sum}</p>
      ) : (
        <input
          className={s.input_update}
          onChange={handleInput}
          name="sum"
          value={capital.sum}
          type="number"
        />
      )}
      <div className={s.box_update_capital_btn}>
        {!showInput ? (
          <IconButton
            variant="outlined"
            type="button"
            onClick={openCapitalUpdate}
          >
            <EditIcon fontSize="medium" color="primary" />
          </IconButton>
        ) : (
          <button
            type="button"
            className={s.user_update_btn}
            onClick={onSubmitCapital}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
}
