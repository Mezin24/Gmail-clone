import { IconButton } from '@mui/material';
import cls from './MailList.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Checkbox from '@mui/material/Checkbox';
import Section from './Section/Section';
import MailRow from './MailRow/MailRow';

const MailList = () => {
  return (
    <div className={cls.mailList}>
      <div className={cls.settings}>
        <div className={cls['settings-left']}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={cls['settings-right']}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className={cls.sections}>
        <Section Icon={InboxIcon} color='red' title='primary' selected />
        <Section Icon={PeopleIcon} color='#1A73E8' title='social' />
        <Section Icon={LocalOfferIcon} color='green' title='promotion' />
      </div>
      <div className={cls.mailRows}>
        <MailRow
          id='1'
          title='Test'
          subject='Subject'
          description='This is the test This is the testThis is the testThis is the testThis is the testThis is the testThis is the test'
          time='10pm'
        />
        <MailRow
          id='1'
          title='Test'
          subject='Subject'
          description='This is the test This is the testThis is the testThis is the testThis is the testThis is the testThis is the test'
          time='10pm'
        />
      </div>
    </div>
  );
};
export default MailList;
