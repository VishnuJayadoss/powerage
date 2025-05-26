import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Privacy Policy',
    description: 'Powerage | Privacy Policy',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
