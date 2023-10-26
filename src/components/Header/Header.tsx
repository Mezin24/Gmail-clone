import cls from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import GmailIcon from 'assets/icons/Gmail.png';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
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
        <Avatar className={cls.avatar} />
      </div>
    </div>
  );
};
export default Header;
