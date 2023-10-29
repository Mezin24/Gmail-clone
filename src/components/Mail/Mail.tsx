import cls from './Mail.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getSelectedMail } from 'store/mail/mailSelector';
import { useSelector } from 'react-redux';

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector(getSelectedMail);

  if (!selectedMail) {
    return null;
  }
  const { description, subject, time, title } = selectedMail;

  return (
    <div className={cls.mail}>
      <div className={cls.tools}>
        <div className={cls.toolsLeft}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={cls.toolsRight}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className={cls.mailBody}>
        <div className={cls.mailHeader}>
          <h2>{subject}</h2>
          <LabelImportantIcon className={cls.labelIcon} />
          <p>{title}</p>
          <p className={cls.time}>{time}</p>
        </div>
        <div className={cls.message}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Mail;
