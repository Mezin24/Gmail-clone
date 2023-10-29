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
import { Mail } from 'types/mail';
import { useEffect, useState } from 'react';
import { collection, orderBy, query } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase.config';

const MailList = () => {
  const [mails, setMails] = useState<Mail[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'mails'), orderBy('time', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const mailsData: Mail[] = querySnapshot.docs.map((doc) => {
        const docData = {
          id: doc.id,
          ...doc.data(),
          time: new Date(doc.data()?.time?.seconds * 1000).toUTCString(),
        } as Mail;
        return docData;
      });
      setMails(mailsData);
    });

    return () => unsubscribe();
  }, []);

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
        {mails.map((mail) => (
          <MailRow key={mail.id} mail={mail} />
        ))}
      </div>
    </div>
  );
};
export default MailList;
