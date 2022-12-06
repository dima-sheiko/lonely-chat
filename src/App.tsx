import { useLocalStorage } from './hooks/useLocalStorage';
import { useSessionStorage } from './hooks/useSessionStorage';
import { UserInput } from './components/UserInput/UserInput';
import { IMessage } from './types/IMessage';
import { MessageInput } from './components/MessageInput/MessageInput';
import { MessageList } from './components/MessageList/MessageList';
import { v4 as uuidv4 } from 'uuid';
import './styles/style.css'
import { Header } from './components/Header/Header';

export const App = () => {
  const [user, setUser] = useSessionStorage('user', '');
  const [messages, setMessages] = useLocalStorage<IMessage[]>('messages', []);

  // Handlers
  const handleUser = (user: string) => {
    if (user !== '') {
      setUser(user);
    }
  };

  const handleMessage = (message: string) => {
    if (message !== '') {
      setMessages([
        ...messages,
        { id: uuidv4(), user: user, message: message },
      ]);
    }
  };

  return (
    <div className='container'>
      <Header title='Lonely Chat' user={user}/>
      <UserInput handleUser={handleUser} user={user}/>
      <MessageInput handleMessage={handleMessage} />
      <MessageList messages={messages} />
    </div>
  );
};
