import Header from 'components/Header/Header';
import Mail from 'components/Mail/Mail';
import MailList from 'components/MailList/MailList';
import SendMail from 'components/SendMail/SendMail';
import Sidebar from 'components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getSendMessageIsOpen } from 'store/user/userSelector';

function App() {
  const sendMessageIsOpen = useSelector(getSendMessageIsOpen);

  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Routes>
          <Route path='/mail' index element={<Mail />} />
          <Route path='/' element={<MailList />} />
        </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;
