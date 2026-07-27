'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Sun, Battery, Zap, Home, Building2,
    ArrowRight, CheckCircle2, Shield, Activity, Power, Factory,
    Lightbulb, Cpu, Cable, Plug, Video, Lock, Radio, Car, TrendingUp, GraduationCap, BedDouble, Store, Truck, Landmark, HardHat, Settings
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

const divisions = [
    {
        id: 'renewable',
        title: 'Renewable Energy Solutions',
        subtitle: 'Sustainable energy solutions designed for today\'s needs and tomorrow\'s future',
        icon: <Sun size={24} />,
        features: ['Clean Energy', 'Maximum Savings', 'Reliable & Safe', 'Sustainable Future'],
        services: [
            { icon: <Home size={32} />, title: 'Residential Rooftop Solar Systems', desc: 'Custom solar installations for homes, turning rooftops into power generators with grid connectivity.' },
            { icon: <Building2 size={32} />, title: 'Commercial Rooftop Solar Systems', desc: 'Scalable solar arrays designed to significantly reduce operational costs for businesses.' },
            { icon: <Factory size={32} />, title: 'Industrial Solar EPC', desc: 'End-to-end solar plant engineering, procurement, and construction for heavy industries.' },
            { icon: <Sun size={32} />, title: 'On-Grid Solar Systems', desc: 'Grid-tied solutions perfectly balancing immediate savings with net metering benefits.' },
            { icon: <Battery size={32} />, title: 'Hybrid Solar Systems', desc: 'Combining the best of grid connectivity and reliable battery backup for uninterrupted power.' },
            { icon: <Settings size={32} />, title: 'Solar Plant Operation & Maintenance', desc: 'Comprehensive monitoring and maintenance to ensure peak solar plant performance year-round.' },
            { icon: <TrendingUp size={32} />, title: 'Net Metering Assistance', desc: 'Expert handling of all grid connection processes and documentation.' },
            { icon: <Activity size={32} />, title: 'Energy Audits & Consultancy', desc: 'Detailed analysis of energy consumption to recommend optimized efficiency upgrades.' },
        ]
    },
    {
        id: 'smart',
        title: 'Smart Power & Automation',
        subtitle: 'Intelligent solutions that enhance efficiency, safety, convenience and control',
        icon: <Cpu size={24} />,
        features: ['Enhanced Control and Security', 'Greater Efficiency and Savings', 'Real-Time Insights and Monitoring', 'Seamless Integration and Reliability'],
        services: [
            { icon: <Home size={32} />, title: 'Home Automation', desc: 'Smart living solutions for lighting, climate, and security with intuitive app controls.' },
            { icon: <Building2 size={32} />, title: 'Building Automation', desc: 'Centralized management systems for large facilities to optimize resources.' },
            { icon: <Video size={32} />, title: 'CCTV Systems', desc: 'High-definition surveillance systems for comprehensive security monitoring.' },
            { icon: <Lock size={32} />, title: 'Video Door Phones', desc: 'Secure entry management with video verification and remote unlocking.' },
            { icon: <Shield size={32} />, title: 'Access Control Systems', desc: 'Advanced biometric and card-based entry systems for restricted areas.' },
            { icon: <Radio size={32} />, title: 'Structured Networking', desc: 'Robust data and communication infrastructure for modern digital demands.' },
            { icon: <Car size={32} />, title: 'EV Charging Infrastructure', desc: 'Fast and reliable electric vehicle charging stations for homes and commercial spaces.' },
            { icon: <Battery size={32} />, title: 'Battery Energy Storage Systems (BESS)', desc: 'High-capacity smart storage to capture and deploy energy when needed most.' },
            { icon: <Activity size={32} />, title: 'Smart Energy Monitoring', desc: 'Real-time tracking of energy usage to identify savings opportunities.' },
        ]
    },
    {
        id: 'industrial',
        title: 'Industrial Power Solutions',
        subtitle: 'Engineered for reliability, efficiency and maximum operational uptime',
        icon: <Power size={24} />,
        features: ['Reliable Performance', 'Advanced Engineering', 'Optimized Efficiency', 'Built for Industry'],
        services: [
            { icon: <Zap size={32} />, title: 'PCC Panels', desc: 'Robust Power Control Center panels for safe main power distribution.' },
            { icon: <Activity size={32} />, title: 'MCC Panels', desc: 'Motor Control Center panels for centralized control of industrial motors.' },
            { icon: <TrendingUp size={32} />, title: 'APFC Panels', desc: 'Automatic Power Factor Correction panels to eliminate penalties and save energy.' },
            { icon: <Power size={32} />, title: 'AMF Panels', desc: 'Automatic Mains Failure panels for seamless transition to backup generators.' },
            { icon: <Cable size={32} />, title: 'Synchronizing Panels', desc: 'Intelligent load sharing panels for multiple generator setups.' },
            { icon: <Settings size={32} />, title: 'VFD Panels', desc: 'Variable Frequency Drive panels for precise motor speed control and energy savings.' },
            { icon: <Cpu size={32} />, title: 'Control Panels', desc: 'Custom-designed automation control panels for specific industrial processes.' },
            { icon: <Plug size={32} />, title: 'Distribution Boards', desc: 'High-quality sub-distribution boards for organized power routing.' },
            { icon: <Factory size={32} />, title: 'Diesel Generator Integration', desc: 'Professional installation and integration of robust backup generators.' },
            { icon: <Lightbulb size={32} />, title: 'Hybrid Power Systems', desc: 'Integrated Solar + Battery + DG systems for zero downtime.' },
        ]
    }
];

const industries = [
    { icon: <Home size={32} />, title: 'Residential Developments' },
    { icon: <Building2 size={32} />, title: 'Commercial Buildings' },
    { icon: <Factory size={32} />, title: 'Industrial Facilities' },
    { icon: <Activity size={32} />, title: 'Hospitals' },
    { icon: <GraduationCap size={32} />, title: 'Educational Institutions' },
    { icon: <BedDouble size={32} />, title: 'Hotels & Hospitality' },
    { icon: <Store size={32} />, title: 'Retail Spaces' },
    { icon: <Truck size={32} />, title: 'Warehouses' },
    { icon: <Landmark size={32} />, title: 'Government Projects' },
    { icon: <HardHat size={32} />, title: 'Infrastructure Developments' },
];

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState(divisions[0].id);

    const currentDivision = divisions.find(d => d.id === activeTab) || divisions[0];

    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Our Services</h1>
                        <p>Complete energy, automation, and industrial solutions across Kerala</p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Division Tabs */}
            <section className="section" style={{ paddingTop: 40, paddingBottom: 0 }}>
                <div className="container">
                    <div style={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: 12, 
                        justifyContent: 'center',
                        marginBottom: 40
                    }}>
                        {divisions.map((division) => (
                            <button
                                key={division.id}
                                onClick={() => setActiveTab(division.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '16px 24px',
                                    borderRadius: 30,
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '1.05rem',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: activeTab === division.id ? '#0FA958' : 'rgba(15,169,88,0.05)',
                                    color: activeTab === division.id ? '#fff' : '#0F172A',
                                    boxShadow: activeTab === division.id ? '0 10px 20px rgba(15,169,88,0.2)' : 'none',
                                }}
                            >
                                {division.icon}
                                {division.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Active Division Content */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection key={currentDivision.id}>
                        <div className="section-header" style={{ marginBottom: 40 }}>
                            <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                                {currentDivision.icon}
                                {currentDivision.title}
                            </div>
                            <h2 className="section-title" style={{ marginTop: 16 }}>{currentDivision.title}</h2>
                            <p className="section-subtitle">{currentDivision.subtitle}</p>
                            
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 32
                            }}>
                                {currentDivision.features.map((feature, i) => (
                                    <div key={i} style={{
                                        display: 'flex', alignItems: 'center', gap: 8,
                                        background: '#fff', padding: '10px 20px', borderRadius: 20,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                                        color: '#0C8A46', fontWeight: 500
                                    }}>
                                        <CheckCircle2 size={18} />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {currentDivision.services.map((service, i) => (
                            <AnimatedCard key={i} delay={i * 0.05}>
                                <div className="service-card" style={{ height: '100%' }}>
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h3 className="service-card-title" style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                                    <p className="service-card-desc">{service.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🏢 Sectors</div>
                            <h2 className="section-title">Industries We Serve</h2>
                            <p className="section-subtitle">Trusted by diverse sectors for reliable and sustainable impact</p>
                        </div>
                    </AnimatedSection>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 24,
                        marginBottom: 40
                    }}>
                        {industries.map((industry, i) => (
                            <AnimatedCard key={i} delay={i * 0.05}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '30px 20px',
                                    background: 'rgba(15,169,88,0.03)',
                                    borderRadius: 24,
                                    border: '1px solid rgba(15,169,88,0.1)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }} className="industry-card">
                                    <div style={{ color: '#0FA958', marginBottom: 16 }}>
                                        {industry.icon}
                                    </div>
                                    <h4 style={{ color: '#0F172A', fontWeight: 600, fontSize: '1.1rem' }}>
                                        {industry.title}
                                    </h4>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 40 }}>
                        {['Solution Focused', 'Trusted by Diverse Sectors', 'Scalable & Reliable', 'Sustainable Impact'].map((highlight, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#475569', fontWeight: 500 }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#0FA958' }}></div>
                                {highlight}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ backgroundColor: '#0A1628', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle at center, #12D96E 0%, transparent 60%)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '60px 0' }}>
                    <AnimatedSection>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 20 }}>Ready to Power Your Future?</h2>
                        <p style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
                            Join hands with GreenVolt for sustainable, intelligent, and reliable energy solutions tailored just for you.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '18px 40px', backgroundColor: '#0FA958', color: '#fff',
                            borderRadius: 30, fontWeight: 600, fontSize: '1.1rem',
                            textDecoration: 'none', transition: 'all 0.3s ease',
                            boxShadow: '0 10px 25px rgba(15,169,88,0.3)'
                        }} className="cta-hover-btn">
                            Get Free Quote <ArrowRight size={20} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
            
            <style dangerouslySetInnerHTML={{__html: `
                .industry-card:hover {
                    transform: translateY(-5px);
                    background: #fff !important;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.06) !important;
                    border-color: #0FA958 !important;
                }
                .cta-hover-btn:hover {
                    transform: translateY(-3px);
                    background: #12D96E !important;
                    box-shadow: 0 15px 35px rgba(15,169,88,0.4) !important;
                }
            `}} />
        </>
    );
}
