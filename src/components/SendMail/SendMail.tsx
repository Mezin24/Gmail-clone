import { Button, IconButton } from '@mui/material';
import cls from './SendMail.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { mailActions } from 'store/mail/mailSlice.ts';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase.config.ts';
import { serverTimestamp } from 'firebase/firestore';

interface IFormInput {
  to: string;
  subject: string;
  message: number;
}

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    await addDoc(collection(db, 'mails'), {
      title: formData.to,
      subject: formData.subject,
      description: formData.message,
      time: serverTimestamp(),
    });
    dispatch(mailActions.closeSendMessage());
  };

  const closeModal = useCallback(() => {
    dispatch(mailActions.closeSendMessage());
  }, [dispatch]);

  return (
    <div className={cls.sendMail}>
      <div className={cls.header}>
        <h3>New message</h3>
        <IconButton className={cls.closeBtn} onClick={closeModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={cls.body}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            placeholder='To'
            {...register('to', { required: true })}
          />
          {errors.to && <p className={cls.errorMsg}>To is required</p>}
          <input
            type='text'
            placeholder='Subject'
            {...register('subject', { required: true })}
          />
          {errors.subject && (
            <p className={cls.errorMsg}>Subject is required</p>
          )}
          <textarea
            placeholder='Message'
            className={cls.inputMsg}
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && (
            <p className={cls.errorMsg}>Message is required</p>
          )}
          <div className={cls.footer}>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              className={cls.sendBtn}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SendMail;
