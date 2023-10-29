import cls from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import GmailIcon from 'assets/icons/Gmail.png';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getUser } from 'store/user/userSelector';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { userActions } from 'store/user/userSlice';

const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    signOut(auth).then(() => {
      dispatch(userActions.logout());
    });
  }, [dispatch]);

  return (
    <div className={cls.header}>
      <div className={cls.header_left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={GmailIcon} alt='logo' className={cls.logo} />
      </div>
      <div className={cls.header_center}>
        <SearchIcon />
        <input type='text' className={cls.search} />
        <ArrowDropDownIcon />
      </div>
      <div className={cls.header_right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={logout} className={cls.avatar} src={user?.photoURL}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      </div>
    </div>
  );
};
export default Header;
