import { ChangeEvent, FormEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './MessageInput.module.css';
import send from '../../assets/send.png';

interface MessageInputProps {
  handleMessage: (message: string) => void;
}

export const MessageInput = ({ handleMessage }: MessageInputProps) => {
  const [value, setValue] = useState('');

  // Handlers
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleMessage(value);
    setValue('');
  };

  return (
    <form
      className={styles.form}
      action='message input'
      onSubmit={onInputSubmit}
    >
      <TextareaAutosize
        maxRows={8}
        className={styles.message_input}
        value={value}
        onChange={onChange}
        name='message'
        placeholder='Write a message...'
      />
      <button className={styles.send_button} type='submit'>
        <img className={styles.icon} src={send} alt='send message' />
      </button>
    </form>
  );
};
