import { useCallback, useState } from 'react';
// materia
import PersonIcon from '@material-ui/icons/Person';
import { useMediaQuery } from 'react-responsive';
// redux
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
// styles
import s from '../Profile/Profile.module.css';

export default function UpdateUser({ closeFormUpdate }) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);
  const initialState = { name: user.name };
  const [updateUser, setUpdateUser] = useState({ ...initialState });

  const handleInput = useCallback(evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setUpdateUser({ [name]: value });
  }, []);

  const updateUserSubmit = useCallback(
    data => {
      dispatch(authOperations.updateUser(data));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      updateUserSubmit(updateUser);
      closeFormUpdate();
      setTimeout(() => dispatch(authOperations.getCurrentUser()), 1000);
    },
    [updateUserSubmit, updateUser, closeFormUpdate, dispatch],
  );

  return (
    <div className={s.profile_list}>
      <form onSubmit={handleSubmit}>
        <ul className={s.profile_user}>
          <li className={s.user_item}>
            <PersonIcon
              color="primary"
              fontSize={isTabletOrMobile ? 'small' : 'medium'}
              style={{ marginLeft: '10px' }}
            />
            <input
              name="name"
              value={updateUser.name}
              type="text"
              onChange={handleInput}
              className={s.input_update}
            />
          </li>
        </ul>
        <div className={s.box_btn}>
          <button type="submit" className={s.user_update_btn}>
            Save
          </button>
          <button
            type="button"
            className={s.user_cancel_btn}
            onClick={closeFormUpdate}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
