import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | OTP',
    description: 'Powerage | OTP',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <> {children} </>;
}

