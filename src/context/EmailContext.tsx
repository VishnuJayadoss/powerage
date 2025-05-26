// src/context/EmailContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const EmailContext = createContext<{
    email: string;
    setEmail: (email: string) => void;
}>({ email: '', setEmail: () => { } });

export const EmailProvider = ({ children }: { children: ReactNode }) => {
    const [email, setEmail] = useState('');
    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            {children}
        </EmailContext.Provider>
    );
};

export const useEmail = () => useContext(EmailContext);
