import { useCallback, useState } from 'react';
// materia
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useMediaQuery } from 'react-responsive';

// redux
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
// styles
import s from '../Profile/Profile.module.css';

export default function UpdateUser() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);
  const initialState = { ...user, newPassword: '' };
  const [updateUser, setUpdateUser] = useState(initialState);

  const handleInput = useCallback(evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setUpdateUser(prev => ({ ...prev, [name]: value }));
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
      console.log(updateUser);
      updateUserSubmit({ updateUser });
    },
    [updateUserSubmit, updateUser],
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
            />
          </li>
          <li className={s.user_item}>
            <VpnKeyIcon
              color="primary"
              fontSize={isTabletOrMobile ? 'small' : 'medium'}
              style={{ marginLeft: '10px' }}
            />
            <input
              name="password"
              value={updateUser.password}
              type="password"
              onChange={handleInput}
              placeholder="old password"
            />
            <div className={s.edit}>
              <Button disableElevation></Button>
            </div>
          </li>
          <li className={s.user_item}>
            <VpnKeyIcon
              color="primary"
              fontSize={isTabletOrMobile ? 'small' : 'medium'}
              style={{ marginLeft: '10px' }}
            />
            <input
              name="newPassword"
              value={updateUser.newPassword}
              type="password"
              onChange={handleInput}
              placeholder="new password"
            />
            <div className={s.edit}>
              <Button disableElevation></Button>
            </div>
          </li>
          <li className={s.user_item}>
            <DraftsIcon
              color="primary"
              fontSize={isTabletOrMobile ? 'small' : 'medium'}
              style={{ marginLeft: '10px' }}
            />
            <input
              name="email"
              value={updateUser.email}
              type="email"
              onChange={handleInput}
            />
          </li>
          <li className={s.user_item}>
            <MonetizationOnIcon
              color="primary"
              fontSize={isTabletOrMobile ? 'small' : 'medium'}
              style={{ marginLeft: '10px' }}
            />
            <input
              name="balance"
              value={updateUser.balance}
              type="text"
              onChange={handleInput}
            />
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
