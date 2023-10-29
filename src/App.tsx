import Header from 'components/Header/Header';
import Login from 'components/Login/Login';
import Mail from 'components/Mail/Mail';
import MailList from 'components/MailList/MailList';
import SendMail from 'components/SendMail/SendMail';
import Sidebar from 'components/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getSendMessageIsOpen } from 'store/mail/mailSelector';
import { getUser } from 'store/user/userSelector';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebase.config';
import { userActions } from 'store/user/userSlice';

function App() {
  const user = useSelector(getUser);
  const sendMessageIsOpen = useSelector(getSendMessageIsOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userActions.login({
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
          })
        );
      }
    });
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

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
