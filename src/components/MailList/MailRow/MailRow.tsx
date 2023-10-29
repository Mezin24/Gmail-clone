import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mailActions } from 'store/mail/mailSlice';
import { Mail } from 'types/mail';
import cls from './MailRow.module.css';

interface MailRowProps {
  mail: Mail;
}

const MailRow = ({ mail }: MailRowProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { description, subject, title, time } = mail;

  const selectMail = useCallback(() => {
    dispatch(mailActions.selectMail(mail));
    navigate('/mail');
  }, [dispatch, mail, navigate]);

  return (
    <div className={cls.mailRow} onClick={selectMail}>
      <div className={cls.options}>
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className={cls.title}>{title}</h3>
      <div className={cls.message}>
        <h4 className={cls.subject}>
          {subject} <span className={cls.description}>-{description}</span>
        </h4>
      </div>
      <div className={cls.time}>{time}</div>
    </div>
  );
};
export default MailRow;
