import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Order',
    description: 'Powerage | Order',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
