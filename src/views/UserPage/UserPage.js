import Picker from '../../components/Picker/Picker';
import Profile from '../../components/Users/Profile/Profile';
import s from './UserPage.module.css';

function UserPage() {
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
