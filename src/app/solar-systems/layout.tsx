import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar Systems Explained | On-Grid vs Off-Grid vs Hybrid - GreenVolt',
    description: 'Detailed comparison of On-Grid, Off-Grid, and Hybrid solar systems. Learn how each system works, benefits, costs, and which is best for your Kerala home.',
    keywords: 'on-grid solar system, off-grid solar system, hybrid solar system, solar system comparison, solar panel types, net metering kerala',
};

export default function SolarLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
