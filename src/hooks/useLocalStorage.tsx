import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const checkGetLocalValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storage, setStorage] = useState(checkGetLocalValue());

  const setStorageContent = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storage) : value;
      setStorage(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    window.addEventListener('storage', () => setStorage(checkGetLocalValue()));
    return () => {
      window.removeEventListener('storage', () =>
        setStorage(checkGetLocalValue())
      );
    };
  }, []);

  return [storage, setStorageContent];
}
