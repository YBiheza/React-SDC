import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import type { User } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;
