import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Products',
    description: 'Powerage | Products',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
