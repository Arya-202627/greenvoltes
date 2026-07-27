import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Renewable Energy, Smart Power & Industrial Solutions - GreenVolt',
    description: 'Complete energy solutions in Kerala. Solar systems, smart home automation, CCTV security, EV charging, industrial power panels, and more. Expert installation and maintenance by GreenVolt Energy Solutions.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
