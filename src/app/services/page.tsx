'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Sun, Battery, Cpu, Zap, Home, Building2,
    ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

const solarServices = [
    {
        id: 'on-grid',
        icon: <Sun size={32} />,
        title: 'On-Grid Solar System',
        desc: 'Connect your solar panels to the electricity grid and use net metering to earn credits for excess power generated. The most popular and cost-effective solar solution for Kerala homes.',
        benefits: [
            'Reduce electricity bill to zero',
            'Earn from excess power via net metering',
            'No battery required — lower cost',
            'Government subsidy up to 40%',
            'ROI in 3-5 years',
        ],
        idealFor: 'Homes and businesses with reliable grid supply looking to reduce electricity costs.',
        image: '/images/ongrid-diagram.png',
    },
    {
        id: 'off-grid',
        icon: <Battery size={32} />,
        title: 'Off-Grid Solar System',
        desc: 'Complete energy independence from the grid. Battery-based solar systems store energy for use during night and cloudy days. Perfect for remote locations.',
        benefits: [
            'Complete energy independence',
            'Works without grid connection',
            'Battery stores excess energy',
            'Ideal for remote areas',
            'Uninterrupted power supply',
        ],
        idealFor: 'Remote locations, areas with frequent power cuts, or those seeking complete grid independence.',
        image: '/images/offgrid-diagram.png',
    },
    {
        id: 'hybrid',
        icon: <Cpu size={32} />,
        title: 'Hybrid Solar System',
        desc: 'The best of both worlds — combines grid connectivity with battery storage. Enjoy grid-tied benefits while having backup power during outages.',
        benefits: [
            'Grid-tied + battery backup',
            'Power during outages',
            'Net metering compatible',
            'Smart energy management',
            'Maximum energy utilization',
        ],
        idealFor: 'Homes and businesses that want both cost savings and power backup security.',
        image: '/images/hybrid-diagram.png',
    },
];

const energyBackup = [
    {
        id: 'battery',
        icon: <Battery size={32} />,
        title: 'Battery Systems',
        desc: 'High-quality lithium-ion and tubular lead-acid batteries for solar energy storage. Reliable, long-lasting, and efficient battery solutions for every need.',
        benefits: ['Lithium-ion & tubular options', 'Long cycle life', 'Deep discharge capable', 'Smart BMS protection'],
    },
    {
        id: 'ups',
        icon: <Zap size={32} />,
        title: 'Home UPS',
        desc: 'Reliable home UPS systems with pure sine wave output. Protect your appliances and enjoy uninterrupted power during grid failures.',
        benefits: ['Pure sine wave output', 'Instant switchover', 'LCD display monitoring', 'Overload protection'],
    },
];

const additionalServices = [
    {
        id: 'electricals',
        icon: <Zap size={32} />,
        title: 'Electricals & Solar Products',
        desc: 'Complete range of electrical products and solar-powered lights. From industrial wiring to energy-efficient lighting solutions.',
        benefits: ['Industrial & Residential Wiring', 'Solar Street Lights', 'LED Lighting Solutions', 'Energy Efficient Products'],
    },
    {
        id: 'cctv',
        icon: <Building2 size={32} />,
        title: 'CCTV & Security Systems',
        desc: 'Advanced security solutions for homes and businesses. High-definition CCTV cameras and integrated security monitoring systems.',
        benefits: ['HD Monitoring', 'Mobile Remote Access', 'Night Vision Cameras', 'Motion Detection Alerts'],
    },
];

const projectTypes = [
    {
        id: 'residential',
        icon: <Home size={32} />,
        title: 'Residential Solar',
        desc: 'Custom-designed rooftop solar systems for Indian homes. We handle everything from design to subsidies, making your home a power-generating asset.',
        benefits: ['Custom roof design', 'Subsidy assistance', 'EMI available', 'Quick installation'],
        image: '/images/hero-solar.png',
    },
    {
        id: 'commercial',
        icon: <Building2 size={32} />,
        title: 'Commercial Solar',
        desc: 'Large-scale solar solutions for factories, warehouses, offices, and commercial buildings. Reduce operational costs and meet sustainability goals.',
        benefits: ['Large capacity systems', 'Quick ROI', 'OPEX/CAPEX models', 'Annual maintenance'],
        image: '/images/commercial-solar.png',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Our Services</h1>
                        <p>Complete solar & energy solutions for homes and businesses across Kerala</p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Solar Solutions */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">☀️ Solar Solutions</div>
                            <h2 className="section-title">Solar Power Systems</h2>
                            <p className="section-subtitle">Choose the right solar system for your needs</p>
                        </div>
                    </AnimatedSection>

                    {solarServices.map((service, idx) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`solar-detail-section ${idx % 2 !== 0 ? 'reverse' : ''}`}
                        >
                            <AnimatedSection delay={0.1}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                        <div style={{
                                            width: 56, height: 56, borderRadius: 14,
                                            background: 'linear-gradient(135deg, rgba(15,169,88,0.1), rgba(15,169,88,0.05))',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#0FA958'
                                        }}>
                                            {service.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.75rem' }}>{service.title}</h3>
                                    </div>
                                    <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24, fontSize: '1rem' }}>
                                        {service.desc}
                                    </p>
                                    <ul className="benefit-list">
                                        {service.benefits.map((b) => (
                                            <li key={b}>
                                                <CheckCircle2 size={18} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{
                                        background: 'rgba(15,169,88,0.06)', borderRadius: 12, padding: '16px 20px',
                                        marginTop: 20, border: '1px solid rgba(15,169,88,0.12)'
                                    }}>
                                        <strong style={{ color: '#0FA958', fontSize: '0.85rem' }}>IDEAL FOR:</strong>
                                        <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: 4 }}>{service.idealFor}</p>
                                    </div>
                                    <Link href="/solar-systems" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                        marginTop: 20, color: '#0FA958', fontWeight: 600, textDecoration: 'none'
                                    }}>
                                        Learn More <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 400 }}>
                                    <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover', borderRadius: 20 }} />
                                </div>
                            </AnimatedSection>
                        </div>
                    ))}
                </div>
            </section>

            {/* Energy Backup */}
            <section className="section section-grey" id="battery">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🔋 Energy Backup</div>
                            <h2 className="section-title">Battery & UPS Solutions</h2>
                            <p className="section-subtitle">Reliable energy backup for uninterrupted power</p>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                        {energyBackup.map((item, i) => (
                            <AnimatedCard key={item.id} delay={i * 0.15}>
                                <div className="service-card" id={item.id}>
                                    <div className="service-card-icon">{item.icon}</div>
                                    <h3 className="service-card-title" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                                    <p className="service-card-desc" style={{ marginBottom: 20 }}>{item.desc}</p>
                                    <ul className="benefit-list">
                                        {item.benefits.map((b) => (
                                            <li key={b}>
                                                <CheckCircle2 size={16} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section" id="additional">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">⚡ Beyond Solar</div>
                            <h2 className="section-title">Additional Services</h2>
                            <p className="section-subtitle">Complete electrical and security solutions</p>
                        </div>
                    </AnimatedSection>
                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                        {additionalServices.map((item, i) => (
                            <AnimatedCard key={item.id} delay={i * 0.15}>
                                <div className="service-card" id={item.id} style={{ height: '100%' }}>
                                    <div className="service-card-icon">{item.icon}</div>
                                    <h3 className="service-card-title" style={{ fontSize: '1.5rem' }}>{item.title}</h3>
                                    <p className="service-card-desc" style={{ marginBottom: 20 }}>{item.desc}</p>
                                    <ul className="benefit-list">
                                        {item.benefits.map((b) => (
                                            <li key={b}>
                                                <CheckCircle2 size={16} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Types */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🏠 Project Types</div>
                            <h2 className="section-title">Residential & Commercial</h2>
                            <p className="section-subtitle">Solar solutions designed for every scale</p>
                        </div>
                    </AnimatedSection>

                    {projectTypes.map((project, idx) => (
                        <div
                            key={project.id}
                            id={project.id}
                            className={`solar-detail-section ${idx % 2 !== 0 ? 'reverse' : ''}`}
                        >
                            <AnimatedSection delay={0.1}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                        <div style={{
                                            width: 56, height: 56, borderRadius: 14,
                                            background: 'linear-gradient(135deg, rgba(15,169,88,0.1), rgba(15,169,88,0.05))',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#0FA958'
                                        }}>
                                            {project.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.75rem' }}>{project.title}</h3>
                                    </div>
                                    <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>{project.desc}</p>
                                    <ul className="benefit-list">
                                        {project.benefits.map((b) => (
                                            <li key={b}>
                                                <CheckCircle2 size={18} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn-primary" style={{ marginTop: 24 }}>
                                        Get Quote <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 400 }}>
                                    <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover', borderRadius: 20 }} />
                                </div>
                            </AnimatedSection>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-banner">
                            <h2 className="cta-title">Ready to Go Solar?</h2>
                            <p className="cta-subtitle">
                                Get a free consultation and customized solar solution for your home or business.
                            </p>
                            <Link href="/contact" className="btn-dark" style={{ position: 'relative', zIndex: 1 }}>
                                Get Free Consultation <ArrowRight size={18} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
