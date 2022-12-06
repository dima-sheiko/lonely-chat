import styles from './Header.module.css'

interface HeaderProps {
  title: string;
  user: string;
}

export const Header = ({ title, user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.welcome}>{user ? `Welcome, ${user}!` : ''}</p>
    </header>
  );
};
