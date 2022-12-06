import { IMessage } from '../../types/IMessage';
import styles from './Message.module.css';

interface MessageProps {
  message: IMessage;
}

export const Message = ({ message }: MessageProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.user}>{message.user}</p>
      <p className={styles.message}>{message.message}</p>
    </div>
  );
};
