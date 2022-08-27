import { useEffect, useState } from 'react';

const PREFIX = 'dev-finder-';

const useLocalStorage = (key: string, initialValue: any = null) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(prefixedKey);
    if (storageValue) return JSON.parse(storageValue);
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

export default useLocalStorage;