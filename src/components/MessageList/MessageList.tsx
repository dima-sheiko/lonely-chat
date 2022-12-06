import { IMessage } from '../../types/IMessage';
import { Message } from '../Message/Message';
import styles from './MessageList.module.css'

interface MessageListProps {
  messages: IMessage[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className={styles.list}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
