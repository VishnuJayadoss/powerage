import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Terms and Service',
    description: 'Powerage | Terms and Service',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
