import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Return Policy',
    description: 'Powerage | Return Policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
