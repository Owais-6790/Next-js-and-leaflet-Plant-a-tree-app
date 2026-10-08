"use client";

import { useEffect, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "../firebase/config";

const useFirebaseDB = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!key) return;

    const dataRef = ref(db, key);

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();

        if (data !== null) {
          setValue(data);
        } else {
          set(dataRef, initialValue).catch((error) => {
            console.error("Error saving initial value:", error);
          });
        }

        setIsLoaded(true);
      },
      (error) => {
        console.error("Firebase read error:", error);
        setIsLoaded(true);
      },
    );

    return () => unsubscribe();
  }, [key]);

  const updateValue = async (newValue) => {
    try {
      const dataRef = ref(db, key);
      setValue(newValue);
      await set(dataRef, newValue);
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
    }
  };

  return [value, updateValue];
};

export default useFirebaseDB;
