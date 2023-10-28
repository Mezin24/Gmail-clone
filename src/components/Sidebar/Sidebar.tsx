import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import cls from './Sidebar.module.css';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { mailActions } from 'store/user/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(mailActions.openSendMessage());
  }, [dispatch]);

  return (
    <div className={cls.sidebar}>
      <Button
        onClick={openModal}
        className={cls.mainBtn}
        startIcon={<AddIcon />}
        color='inherit'
      >
        compose
      </Button>
      <SidebarOption Icon={InboxIcon} title='Inbox' value={54} active />
      <SidebarOption Icon={StarIcon} title='Starred' value={54} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' value={54} />
      <SidebarOption Icon={LabelImportantIcon} title='Important' value={54} />
      <SidebarOption Icon={NearMeIcon} title='Send' value={54} />
      <SidebarOption Icon={NoteIcon} title='Drafts' value={54} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' value={54} />
      <div className={cls.footer}>
        <div className={cls['footer-icons']}>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
