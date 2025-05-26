import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Products Detail',
    description: 'Powerage | Products Detail',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
