import { useEffect, useState } from "react";

function useDebounce<T = any>(searchQuery: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState(searchQuery);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay || 500);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return debounceValue;
}

export default useDebounce;
