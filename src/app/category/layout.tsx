import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Category',
    description: 'Powerage | Category',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
