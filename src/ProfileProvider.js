import { createContext, useState } from 'react';

export const ProfileContext = createContext({userId: 0, setUserId: function () {}});

export default function ProfileProvider ({children}) {
    const [userId, setUserId] = useState(0);
    return (
        <ProfileContext.Provider value={{userId, setUserId}}>
            {children}
        </ProfileContext.Provider>
    );
}