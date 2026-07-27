'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Target, Eye, Heart, Shield, Users, Award,
    ArrowRight, CheckCircle2, Leaf, Lightbulb, Handshake,
    ClipboardCheck, PenTool, Settings, Wrench, Headphones,
    ShieldCheck, Cpu, Rocket, Sun, Battery
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

export default function AboutPage() {
    return (
        <>
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>About GreenVolt Energy</h1>
                        <p>Kerala&apos;s trusted partner in solar energy and sustainable power solutions</p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Company Intro */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
                        <AnimatedSection>
                            <div>
                                <div className="section-badge">🌱 Who We Are</div>
                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 20 }}>
                                    Powering Kerala&apos;s Green Future
                                </h2>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20, fontSize: '1.05rem' }}>
                                    <strong>GreenVolt Energy Solutions LLP</strong> is a leading energy solutions company
                                    based in Kerala, dedicated to delivering innovative, reliable, and sustainable power solutions. 
                                    We specialize in renewable energy systems, smart power & automation, and industrial power solutions — 
                                    from compact residential rooftops to large commercial and industrial installations.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                                    Our team of certified engineers and technicians ensures every project is executed with
                                    precision, quality, and care. With a commitment to sustainability and customer satisfaction, 
                                    we&apos;ve helped hundreds of families and businesses across Kerala reduce their energy costs
                                    and carbon footprint.
                                </p>
                                <ul className="benefit-list">
                                    <li><CheckCircle2 size={18} /> 500+ successful installations across Kerala</li>
                                    <li><CheckCircle2 size={18} /> Complete subsidy processing support</li>
                                    <li><CheckCircle2 size={18} /> EMI & loan facility available</li>
                                    <li><CheckCircle2 size={18} /> All 14 districts of Kerala covered</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(15,169,88,0.08), rgba(15,169,88,0.02))',
                                borderRadius: 24, padding: 48, border: '1px solid rgba(15,169,88,0.12)',
                                textAlign: 'center'
                            }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                                    {[
                                        { num: '500+', label: 'Projects' },
                                        { num: '10MW+', label: 'Installed' },
                                        { num: '14', label: 'Districts' },
                                        { num: '100%', label: 'Satisfaction' },
                                    ].map((stat) => (
                                        <div key={stat.label}>
                                            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', fontWeight: 800, color: '#0FA958' }}>
                                                {stat.num}
                                            </div>
                                            <div style={{ color: '#64748B', fontSize: '0.9rem' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section section-grey">
                <div className="container">
                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        <AnimatedCard delay={0}>
                            <div className="service-card" style={{ textAlign: 'center', padding: 48 }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px', color: 'white'
                                }}>
                                    <Eye size={36} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Our Vision</h3>
                                <p style={{ color: '#475569', lineHeight: 1.8 }}>
                                    To be Kerala&apos;s most trusted renewable energy company, leading the transition
                                    to a sustainable future where every home and business is powered by clean solar energy.
                                </p>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.15}>
                            <div className="service-card" style={{ textAlign: 'center', padding: 48 }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px', color: 'white'
                                }}>
                                    <Target size={36} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Our Mission</h3>
                                <p style={{ color: '#475569', lineHeight: 1.8 }}>
                                    To make solar energy accessible, affordable, and hassle-free for everyone in Kerala
                                    through innovative solutions, exceptional service, and complete customer support.
                                </p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">⚙️ OUR PROCESS</div>
                            <h2 className="section-title">BUILT ON TRUST, DELIVERED WITH EXCELLENCE</h2>
                            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                From Concept to Completion, We Deliver Value at Every Step. Our streamlined process ensures quality, transparency and timely delivery.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, margin: '0 auto' }}>
                        {[
                            { num: 1, title: 'Consultation', desc: 'Understanding your needs and assessing site feasibility', icon: <ClipboardCheck size={24} /> },
                            { num: 2, title: 'Design & Planning', desc: 'Customized solution design with detailed planning and approvals', icon: <PenTool size={24} /> },
                            { num: 3, title: 'Engineering & Procurement', desc: 'Engineering excellence and sourcing high-quality components', icon: <Settings size={24} /> },
                            { num: 4, title: 'Installation & Commissioning', desc: 'Professional installation with rigorous testing and commissioning', icon: <Wrench size={24} /> },
                            { num: 5, title: 'Operation & Support', desc: 'Reliable maintenance, monitoring and long-term support', icon: <Headphones size={24} /> },
                        ].map((step, i) => (
                            <AnimatedCard key={step.title} delay={i * 0.1}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 24, background: 'white', padding: 24,
                                    borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid rgba(15,169,88,0.1)'
                                }}>
                                    <div style={{
                                        width: 64, height: 64, borderRadius: '50%', background: '#0FA958', color: 'white',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        fontSize: '1.25rem', fontWeight: 'bold'
                                    }}>
                                        {step.num}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                                            {step.title}
                                        </h3>
                                        <p style={{ color: '#475569', margin: 0 }}>{step.desc}</p>
                                    </div>
                                    <div style={{ color: '#0FA958', opacity: 0.2 }}>
                                        {step.icon}
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🤝 OUR COMMITMENT</div>
                            <h2 className="section-title">POWERING A BETTER TOMORROW</h2>
                            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                We are committed to delivering innovative, sustainable and reliable energy solutions that create long-term value for our clients, communities and the environment.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            { icon: <ShieldCheck size={32} />, title: 'Quality Assurance', desc: 'Delivering solutions that meet the highest standards of quality and safety' },
                            { icon: <Leaf size={32} />, title: 'Sustainability', desc: 'Promoting clean energy solutions that protect the planet for future generations' },
                            { icon: <Handshake size={32} />, title: 'Integrity', desc: 'Building relationships based on trust, transparency and ethical business practices' },
                            { icon: <Heart size={32} />, title: 'Customer Focus', desc: 'Understanding our clients\' needs and delivering solutions that exceed expectations' },
                        ].map((item, i) => (
                            <AnimatedCard key={item.title} delay={i * 0.1}>
                                <div className="service-card" style={{ padding: 32, textAlign: 'center', height: '100%' }}>
                                    <div style={{ color: '#0FA958', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 12 }}>{item.title}</h3>
                                    <p style={{ color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#0FA958', fontWeight: 500 }}>
                            &quot;We don&apos;t just build systems, we build lasting impact.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Why GreenVolt */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">💎 Why Choose Us</div>
                            <h2 className="section-title">Why GreenVolt?</h2>
                            <p className="section-subtitle">Delivering excellence through our core strengths</p>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {[
                            { icon: <Wrench size={24} />, title: 'Complete Turnkey Engineering Solutions', desc: 'End-to-end services from design to commissioning and beyond' },
                            { icon: <ClipboardCheck size={24} />, title: 'End-to-End Project Management', desc: 'Dedicated planning, execution and quality control at every stage' },
                            { icon: <ShieldCheck size={24} />, title: 'Licensed Electrical Contracting Expertise', desc: 'Grade A Licensed Electrical Contractor with full compliance' },
                            { icon: <Award size={24} />, title: 'Safety & Quality Driven', desc: 'Strict adherence to safety standards and superior quality practices' },
                            { icon: <CheckCircle2 size={24} />, title: 'MNRE Empanelled Vendor', desc: 'Authorized to offer MNRE compliant grid-interactive and standalone energy solutions' },
                            { icon: <Eye size={24} />, title: 'Transparent Execution', desc: 'Clear communication, timely updates and complete transparency' },
                            { icon: <Cpu size={24} />, title: 'Smart Building Integration', desc: 'Automation, monitoring and security for modern buildings' },
                            { icon: <Headphones size={24} />, title: 'Reliable After-Sales Service', desc: 'Prompt assistance and technical support for continued performance' },
                            { icon: <Users size={24} />, title: 'Experienced Engineering Team', desc: 'Skilled professionals delivering reliable and efficient solutions' },
                            { icon: <Settings size={24} />, title: 'Long-Term Maintenance Services', desc: 'AMC and maintenance programs for continued performance' },
                        ].map((value, i) => (
                            <AnimatedCard key={value.title} delay={i * 0.05}>
                                <div className="value-card" style={{ height: '100%' }}>
                                    <div className="value-icon">{value.icon}</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{value.title}</h3>
                                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>{value.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#0A1628', fontWeight: 600 }}>
                            &quot;We deliver more than solutions. We build lasting partnerships powered by trust, quality and performance.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🏅 Trust & Credibility</div>
                            <h2 className="section-title">Certifications & Approvals</h2>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            { 
                                icon: '/images/certs/seal.png', 
                                title: 'ELECTRICAL CONTRACTOR LICENCE', 
                            },
                            { 
                                icon: '/images/certs/iso.png', 
                                title: 'ISO 9001:2015 IAF CERTIFICATE', 
                            },
                            { 
                                icon: '/images/certs/startup-india.png', 
                                title: 'STARTUP INDIA', 
                            },
                            { 
                                icon: '/images/certs/emblem.png', 
                                title: 'MNRE AUTHORISED', 
                            },
                        ].map((cert, i) => (
                            <AnimatedCard key={cert.title} delay={i * 0.1}>
                                <div style={{
                                    background: '#ffffff', border: '1px solid #E2E8F0', borderBottom: '3px solid #10B981',
                                    borderRadius: 12, padding: 32, textAlign: 'center',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)', height: '100%'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, position: 'relative', width: '100%' }}>
                                        <Image src={cert.icon} alt={cert.title} fill style={{ objectFit: 'contain' }} unoptimized />
                                    </div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#003366', letterSpacing: '0.05em' }}>{cert.title}</h3>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Partners */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🤝 Collaboration</div>
                            <h2 className="section-title">Our Partners</h2>
                            <p className="section-subtitle">We partner with industry leaders to deliver the best solutions</p>
                        </div>
                    </AnimatedSection>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
                        {[
                            { category: 'Inverters', brands: ['APS', 'Deye', 'Microtek', 'FOX', 'Solaris', 'SolarEdge', 'T-SUN', 'Hayunhlas'] },
                            { category: 'Solar Panels', brands: ['APS', 'WAAREE', 'Adani', 'Norstorm', 'Microtek', 'Havells', 'Luminous', 'Premier'] },
                            { category: 'Batteries', brands: ['EXIDE', 'Microtek', 'AMARON', 'Luminous', 'Deye', 'SOLAIRE'] },
                            { category: 'Automation & Electrical', brands: ['Havells', 'KEI', 'Polycab', 'V-Guard', 'L&T'] },
                        ].map((partner, i) => (
                            <AnimatedCard key={partner.category} delay={i * 0.1}>
                                <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 24, height: '100%', border: '1px solid #E2E8F0' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: 20, color: '#0A1628', borderBottom: '2px solid #0FA958', display: 'inline-block', paddingBottom: 4 }}>
                                        {partner.category}
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {partner.brands.map(brand => (
                                            <span key={brand} style={{
                                                background: 'white', padding: '6px 14px', borderRadius: 20,
                                                fontSize: '0.85rem', fontWeight: 600, color: '#475569',
                                                border: '1px solid #CBD5E1', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                            }}>
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">👥 Leadership</div>
                            <h2 className="section-title">Whose Leading the Way</h2>
                        </div>
                    </AnimatedSection>

                    <div style={{ maxWidth: 400, margin: '0 auto' }}>
                        <AnimatedCard>
                            <div className="service-card" style={{ textAlign: 'center', padding: 40 }}>
                                <div style={{
                                    width: 120, height: 120, borderRadius: '50%',
                                    background: '#f1f5f9', margin: '0 auto 24px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#0FA958'
                                }}>
                                    <Users size={64} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 4 }}>Dinesh Viswanath</h3>
                                <p style={{ color: '#0FA958', fontWeight: 600, marginBottom: 16 }}>Managing Partner</p>
                                <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Leading GreenVolt Energy with a vision to transform Kerala&apos;s energy landscape
                                    through sustainable and innovative power solutions.
                                </p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-banner">
                            <h2 className="cta-title">Join the Sustainable Revolution</h2>
                            <p className="cta-subtitle">
                                Be part of Kerala&apos;s clean energy movement. Let&apos;s power your future together.
                            </p>
                            <Link href="/contact" className="btn-dark" style={{ position: 'relative', zIndex: 1 }}>
                                Partner With Us <ArrowRight size={18} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
