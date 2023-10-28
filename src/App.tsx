import Header from 'components/Header/Header';
import Mail from 'components/Mail/Mail';
import MailList from 'components/MailList/MailList';
import Sidebar from 'components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';

function App() {
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
    </div>
  );
}

export default App;
