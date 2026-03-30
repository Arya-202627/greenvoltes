'use client';

import Link from 'next/link';
import {
    Target, Eye, Heart, Shield, Users, Award,
    ArrowRight, CheckCircle2, Leaf, Lightbulb, Handshake
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
                                    <strong>GreenVolt Energy Solutions LLP</strong> is a leading renewable energy company
                                    based in Kerala, dedicated to making clean, affordable solar energy accessible
                                    to every home and business.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                                    We specialize in designing, installing, and maintaining solar power systems —
                                    from compact residential rooftops to large commercial installations. Our team
                                    of certified engineers and technicians ensures every project is executed with
                                    precision, quality, and care.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
                                    With a commitment to sustainability and customer satisfaction, we&apos;ve helped
                                    hundreds of families and businesses across Kerala reduce their energy costs
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

            {/* Core Values */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">💎 Our Values</div>
                            <h2 className="section-title">Why GreenVolt Stands Out</h2>
                            <p className="section-subtitle">Our core values define everything we do</p>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            { icon: <Shield size={28} />, title: 'Quality First', desc: 'We use only premium-grade panels, inverters, and components from trusted global brands.' },
                            { icon: <Heart size={28} />, title: 'Customer Care', desc: 'Your satisfaction is our priority. We provide dedicated support from consultation to after-sales.' },
                            { icon: <Leaf size={28} />, title: 'Sustainability', desc: 'Every installation contributes to a cleaner planet. We are committed to a greener Kerala.' },
                            { icon: <Lightbulb size={28} />, title: 'Innovation', desc: 'We stay updated with the latest solar technology to deliver the most efficient systems.' },
                            { icon: <Handshake size={28} />, title: 'Integrity', desc: 'Transparent pricing, honest advice, and no hidden costs. Trust is the foundation of our business.' },
                            { icon: <Users size={28} />, title: 'Expert Team', desc: 'MNRE-trained engineers and certified technicians with years of hands-on experience.' },
                        ].map((value, i) => (
                            <AnimatedCard key={value.title} delay={i * 0.08}>
                                <div className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3 style={{ fontSize: '1.125rem', marginBottom: 8 }}>{value.title}</h3>
                                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>{value.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section">
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
                                    through sustainable and innovative solar solutions.
                                </p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🏅 Trust & Credibility</div>
                            <h2 className="section-title">Certifications & Partnerships</h2>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            { icon: <Award size={32} />, title: 'MNRE Empanelled', desc: 'Registered with Ministry of New & Renewable Energy (future vendor)' },
                            { icon: <Shield size={32} />, title: 'KSEB Approved', desc: 'Approved vendor for net metering and grid-connected installations' },
                            { icon: <CheckCircle2 size={32} />, title: 'ISO Standards', desc: 'Following international quality standards in all installations' },
                            { icon: <Users size={32} />, title: 'OEM Partners', desc: 'Authorized partner of leading solar panel and inverter manufacturers' },
                        ].map((cert, i) => (
                            <AnimatedCard key={cert.title} delay={i * 0.1}>
                                <div className="why-card">
                                    <div className="why-icon">{cert.icon}</div>
                                    <h3 className="why-title">{cert.title}</h3>
                                    <p className="why-desc">{cert.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-banner">
                            <h2 className="cta-title">Join the Solar Revolution</h2>
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
