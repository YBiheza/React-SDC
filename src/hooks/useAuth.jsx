import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'

export function useAuth () {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const u = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => u;
    }, [])

    return user;
}

export default useAuth