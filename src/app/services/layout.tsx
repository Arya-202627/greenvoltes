import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar Services | On-Grid, Off-Grid, Hybrid Solar Kerala - GreenVolt',
    description: 'Complete solar energy services in Kerala. On-Grid, Off-Grid, Hybrid solar systems, battery backup, home UPS, residential and commercial solar installation.',
    keywords: 'solar services kerala, on-grid solar, off-grid solar, hybrid solar, battery backup, home UPS, solar installation kerala',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
