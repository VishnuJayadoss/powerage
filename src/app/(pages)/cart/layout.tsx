import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Cart',
    description: 'Powerage | Cart',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
