import { createContext, useEffect, useState } from "react";
import axios from "axios"; // Make sure axios is imported

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready,setReady]=useState(false);

    useEffect(() => {
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => {  // Corrected destructuring and used 'data' instead of 'user'
                    setUser(data);
                    setReady(true);
                })
                .catch(error => {
                    console.error("Error fetching profile:", error);
                });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser ,ready}}>  {/* Pass as an object */}
            {children}
        </UserContext.Provider>
    );
}
