import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | About',
    description: 'Powerage | About',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
