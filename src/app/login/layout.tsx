import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Login',
    description: 'Powerage | Login',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
