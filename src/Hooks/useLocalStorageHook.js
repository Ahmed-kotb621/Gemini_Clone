import { useEffect, useState } from "react";

export function useLocalStorageHook(key, initialValue) {
  const [value, setValue] = useState(() => {
    // retrieve initial value , or default value
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  useEffect(() => {
    // update local stoage if whenever value changed
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
