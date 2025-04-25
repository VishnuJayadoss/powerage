import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Powerage | Dealer',
    description: 'Powerage | Dealer',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
