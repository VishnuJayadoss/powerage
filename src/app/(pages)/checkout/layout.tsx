import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Checkout',
    description: 'Powerage | Checkout',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; 
}
