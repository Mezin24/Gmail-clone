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

const Mail = () => {
  const navigate = useNavigate();
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
          <h2>Subject</h2>
          <LabelImportantIcon className={cls.labelIcon} />
          <p>Title</p>
          <p className={cls.time}>10pm</p>
        </div>
        <div className={cls.message}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            asperiores aut est eos, saepe inventore commodi odit quos minus
            tempora repellat ducimus nihil. Eaque totam veniam praesentium
            voluptatum possimus quas nesciunt sunt, laudantium, obcaecati nulla
            tempora aliquam vitae ut hic quibusdam tempore labore voluptatibus.
            Fuga optio eaque praesentium. Quisquam officia necessitatibus
            laudantium culpa non autem! Reprehenderit quae quaerat blanditiis
            aliquid consequuntur aut labore dolorum ipsa dolores laborum, optio,
            voluptates temporibus iusto debitis hic. Doloribus voluptatem eaque,
            optio consectetur illum facilis quasi maiores nesciunt eligendi ab
            tempora, quam delectus expedita dolorem fugit facere amet commodi,
            illo esse alias officiis? Dolorem fugiat porro maxime iusto quis
            exercitationem, earum nisi temporibus! Dicta quidem consectetur
            laudantium fugit quis, amet, recusandae eligendi ab reprehenderit
            sapiente explicabo consequatur deserunt soluta, unde adipisci sunt
            ex. Illum deleniti ut fugit molestias debitis maiores sed laboriosam
            eius ex labore assumenda minus tempora, quos dicta distinctio
            facilis eos earum doloremque pariatur deserunt tenetur. Cupiditate
            eveniet molestias voluptas deserunt et perferendis aliquid veritatis
            cumque, similique tenetur quae quibusdam dolorem facilis temporibus.
            Optio nostrum odio culpa aliquid laboriosam voluptate, earum, saepe
            non, vero veritatis quam et aspernatur accusantium reiciendis.
            Commodi cumque corporis fugit, odit vitae at distinctio dicta est
            placeat, consectetur deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Mail;
