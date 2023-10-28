import cls from './MailRow.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

interface MailRowProps {
  id: string;
  title: string;
  description: string;
  subject: string;
  time: string;
}

const MailRow = (props: MailRowProps) => {
  const navigate = useNavigate();
  const { id, description, subject, title, time } = props;
  return (
    <div className={cls.mailRow} onClick={() => navigate('/mail')}>
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
