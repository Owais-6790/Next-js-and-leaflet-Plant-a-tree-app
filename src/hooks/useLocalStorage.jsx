"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  // Get data from localStorage after hydration
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(key);
      console.log(storedData);

      if (storedData !== null) {
        setValue(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    } finally {
      setIsHydrated(true);
    }
  }, [key]);

  // Save data only after localStorage has been checked
  useEffect(() => {
    if (!isHydrated) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value, isHydrated]);

  return [value, setValue];
};

export default useLocalStorage;
