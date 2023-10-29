import { Button } from '@mui/material';
import cls from './Login.module.css';
import GmailLogo from 'assets/gmail-logo.png';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { auth, provider } from '../../../firebase.config';
import { userActions } from 'store/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const signIn = useCallback(async () => {
    const userCredentials = await signInWithPopup(auth, provider);
    dispatch(
      userActions.login({
        displayName: userCredentials.user.displayName || '',
        email: userCredentials.user.email || '',
        photoURL: userCredentials.user.photoURL || '',
      })
    );
  }, [dispatch]);

  return (
    <div className={cls.login}>
      <div className={cls.loginContainer}>
        <img src={GmailLogo} alt='logo' className={cls.logo} />
        <Button onClick={signIn} variant='contained' color='primary'>
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;
