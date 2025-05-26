import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Shipping Policy',
    description: 'Powerage | Shipping Policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
