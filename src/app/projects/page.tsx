'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Zap, Calendar } from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

const projects = [
    {
        title: 'Residential Solar – Kochi',
        location: 'Ernakulam, Kerala',
        size: '5 kW',
        type: 'On-Grid',
        year: '2025',
        desc: 'Rooftop solar installation for a 3BHK house. Net metering enabled with ₹0 electricity bills.',
        image: '/images/hero-solar.png',
    },
    {
        title: 'Commercial Rooftop – Thrissur',
        location: 'Thrissur, Kerala',
        size: '50 kW',
        type: 'On-Grid',
        year: '2025',
        desc: 'Large-scale commercial rooftop installation for a textile warehouse. 80% electricity cost reduction.',
        image: '/images/commercial-solar.png',
    },
    {
        title: 'Hybrid System – Kozhikode',
        location: 'Kozhikode, Kerala',
        size: '10 kW',
        type: 'Hybrid',
        year: '2024',
        desc: 'Hybrid solar system with 10kWh lithium battery. Uninterrupted power for a medical clinic.',
        image: '/images/hero-solar.png',
    },
    {
        title: 'Residential Solar – Trivandrum',
        location: 'Thiruvananthapuram, Kerala',
        size: '3 kW',
        type: 'On-Grid',
        year: '2024',
        desc: 'Compact 3kW system for a small family home. Government subsidy processed within 45 days.',
        image: '/images/hero-solar.png',
    },
    {
        title: 'Factory Solar – Palakkad',
        location: 'Palakkad, Kerala',
        size: '100 kW',
        type: 'On-Grid',
        year: '2024',
        desc: 'Large industrial solar installation for a rice mill. Annual savings of ₹8 lakhs on electricity.',
        image: '/images/commercial-solar.png',
    },
    {
        title: 'Off-Grid Farm – Wayanad',
        location: 'Wayanad, Kerala',
        size: '8 kW',
        type: 'Off-Grid',
        year: '2024',
        desc: 'Complete off-grid setup for a hillside farm with no grid access. Battery-powered 24/7.',
        image: '/images/hero-solar.png',
    },
];

export default function ProjectsPage() {
    return (
        <>
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Our Projects</h1>
                        <p>Showcasing our solar installations across Kerala — from homes to factories</p>
                    </AnimatedSection>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">📸 Portfolio</div>
                            <h2 className="section-title">Completed Installations</h2>
                            <p className="section-subtitle">
                                Every project reflects our commitment to quality, precision, and customer satisfaction.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {projects.map((project, i) => (
                            <AnimatedCard key={i} delay={i * 0.1}>
                                <div className="project-card">
                                    <div className="project-image">
                                        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                                        <div className="project-tag">{project.type}</div>
                                    </div>
                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 16 }}>
                                            {project.desc}
                                        </p>
                                        <div className="project-meta" style={{ flexWrap: 'wrap', gap: 12 }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <MapPin size={14} color="#0FA958" /> {project.location}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <Zap size={14} color="#0FA958" /> {project.size}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <Calendar size={14} color="#0FA958" /> {project.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-banner">
                            <h2 className="cta-title">Want Your Home in This Gallery?</h2>
                            <p className="cta-subtitle">
                                Join hundreds of happy solar homeowners in Kerala. Get your free solar quote today.
                            </p>
                            <Link href="/contact" className="btn-dark" style={{ position: 'relative', zIndex: 1 }}>
                                Start Your Solar Project <ArrowRight size={18} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
