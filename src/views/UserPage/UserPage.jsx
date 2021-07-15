import s from './UserPage.module.css';
import Profile from '../../components/Users/Profile/Profile';

export default function UserPage() {
  return (
    <div className={s.box_user}>
      <div>
        <Profile />
      </div>
      <div className={s.user_dreams}></div>
    </div>
  );
}
