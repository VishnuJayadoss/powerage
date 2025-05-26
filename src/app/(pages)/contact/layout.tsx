import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Contact',
    description: 'Powerage | Contact',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
