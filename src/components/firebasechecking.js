"use client";

import { db } from "@/firebase/config";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const firebasechecking = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const userRef = ref(db, key);

  useEffect(async () => {
    try {
      const snapshot = await get(ref(userRef));
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("no data found");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);
};

export default firebasechecking;
