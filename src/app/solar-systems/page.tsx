'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Sun, Battery, Cpu, ArrowRight, CheckCircle2,
    Zap, Shield, TrendingUp, IndianRupee, AlertTriangle
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

export default function SolarSystemsPage() {
    return (
        <>
            {/* Page Header */}
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Solar System Types Explained</h1>
                        <p>Understand the differences between On-Grid, Off-Grid, and Hybrid solar systems to make the right choice</p>
                    </AnimatedSection>
                </div>
            </div>

            {/* ===== ON-GRID ===== */}
            <section className="section" id="on-grid">
                <div className="container">
                    <AnimatedSection>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                            <div style={{
                                width: 64, height: 64, borderRadius: 16,
                                background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                            }}>
                                <Sun size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 4 }}>On-Grid Solar System</h2>
                                <p style={{ color: '#64748B' }}>Grid-Connected | Net Metering | Most Popular</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="solar-detail-section" style={{ borderBottom: 'none', paddingTop: 0 }}>
                        <AnimatedSection delay={0.1}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#0FA958' }}>How It Works</h3>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                                    An On-Grid solar system is connected directly to the utility electricity grid.
                                    Solar panels generate DC power which is converted to AC by an inverter and fed into your home.
                                    Any excess power is exported to the grid through a bi-directional net meter,
                                    earning you credits on your electricity bill.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
                                    During the day, your home uses solar power first. If solar generates more than you consume,
                                    the excess goes to the grid. At night, you draw power from the grid.
                                    At the end of the billing cycle, you only pay for the net difference.
                                </p>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Key Benefits</h3>
                                <ul className="benefit-list">
                                    <li><CheckCircle2 size={18} /> <strong>Zero electricity bills</strong> — net metering credits offset your consumption</li>
                                    <li><CheckCircle2 size={18} /> <strong>No battery cost</strong> — lowest upfront investment among all solar systems</li>
                                                                    <li><CheckCircle2 size={18} /> <strong>Government subsidy</strong> — ₹78,000 subsidy available</li>
                                    <li><CheckCircle2 size={18} /> <strong>Fast ROI</strong> — recover investment in 3-5 years</li>
                                    <li><CheckCircle2 size={18} /> <strong>Low maintenance</strong> — minimal moving parts, easy to maintain</li>
                                    <li><CheckCircle2 size={18} /> <strong>25-year lifespan</strong> — panels degrade only ~0.5% per year</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 450 }}>
                                <Image src="/images/ongrid-diagram.png" alt="On-Grid Solar System Diagram" fill style={{ objectFit: 'contain', borderRadius: 20 }} />
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection>
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(15,169,88,0.06), rgba(15,169,88,0.02))',
                            border: '1px solid rgba(15,169,88,0.12)',
                            borderRadius: 16, padding: 32, marginTop: 24
                        }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, color: '#0FA958' }}>
                                <IndianRupee size={20} /> Government Subsidy
                            </h4>
                            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 0 }}>
                                Get up to <strong>₹78,000 Government Subsidy</strong> for your residential rooftop solar installation. GreenVolt handles the entire subsidy paperwork and approvals for you.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ===== OFF-GRID ===== */}
            <section className="section section-grey" id="off-grid">
                <div className="container">
                    <AnimatedSection>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                            <div style={{
                                width: 64, height: 64, borderRadius: 16,
                                background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                            }}>
                                <Battery size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 4 }}>Off-Grid Solar System</h2>
                                <p style={{ color: '#64748B' }}>Battery-Based | Grid Independent | Full Autonomy</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="solar-detail-section reverse" style={{ borderBottom: 'none', paddingTop: 0 }}>
                        <AnimatedSection delay={0.1}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#0FA958' }}>How It Works</h3>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                                    An Off-Grid solar system operates completely independently from the utility grid.
                                    Solar panels charge a battery bank through a charge controller.
                                    The stored energy is then converted from DC to AC by an inverter
                                    to power your home appliances.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
                                    This system is ideal for locations without grid access or areas with extremely
                                    unreliable power supply. You are fully self-sufficient and not dependent on
                                    any utility company.
                                </p>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Key Benefits</h3>
                                <ul className="benefit-list">
                                    <li><CheckCircle2 size={18} /> <strong>Complete grid independence</strong> — no electricity bills at all</li>
                                    <li><CheckCircle2 size={18} /> <strong>Works in remote areas</strong> — no grid connection needed</li>
                                    <li><CheckCircle2 size={18} /> <strong>24/7 power supply</strong> — battery provides nighttime power</li>
                                    <li><CheckCircle2 size={18} /> <strong>No power cuts</strong> — fully independent power source</li>
                                    <li><CheckCircle2 size={18} /> <strong>Scalable</strong> — add more panels and batteries as needed</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 450 }}>
                                <Image src="/images/offgrid-diagram.png" alt="Off-Grid Solar System Diagram" fill style={{ objectFit: 'contain', borderRadius: 20 }} />
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection>
                        <div style={{
                            background: 'rgba(255,193,7,0.08)',
                            border: '1px solid rgba(255,193,7,0.2)',
                            borderRadius: 16, padding: 32, marginTop: 24
                        }}>
                            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, color: '#F59E0B' }}>
                                <AlertTriangle size={20} /> Important Consideration
                            </h4>
                            <p style={{ color: '#475569', lineHeight: 1.8 }}>
                                Off-grid systems require batteries which add to the initial cost. Battery replacement
                                is needed every 5-8 years (lead-acid) or 10-15 years (lithium-ion).
                                This system is best suited when grid connection is unavailable or extremely unreliable.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ===== HYBRID ===== */}
            <section className="section" id="hybrid">
                <div className="container">
                    <AnimatedSection>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                            <div style={{
                                width: 64, height: 64, borderRadius: 16,
                                background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                            }}>
                                <Cpu size={32} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: 4 }}>Hybrid Solar System</h2>
                                <p style={{ color: '#64748B' }}>Best of Both | Grid + Battery | Smart System</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="solar-detail-section" style={{ borderBottom: 'none', paddingTop: 0 }}>
                        <AnimatedSection delay={0.1}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 16, color: '#0FA958' }}>How It Works</h3>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20 }}>
                                    A Hybrid solar system is the ultimate solar solution — combining grid connectivity
                                    with battery storage. A hybrid inverter manages power flow intelligently:
                                    solar power first charges batteries and powers loads, excess goes to the grid
                                    via net metering, and batteries kick in during power cuts.
                                </p>
                                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 24 }}>
                                    This gives you the cost benefits of an on-grid system (net metering credits)
                                    plus the security of battery backup. The smart inverter automatically manages
                                    all power flow without any manual intervention.
                                </p>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Key Benefits</h3>
                                <ul className="benefit-list">
                                    <li><CheckCircle2 size={18} /> <strong>Best of both worlds</strong> — grid savings + battery backup</li>
                                    <li><CheckCircle2 size={18} /> <strong>Net metering</strong> — earn credits for excess power</li>
                                    <li><CheckCircle2 size={18} /> <strong>Backup during outages</strong> — seamless battery switchover</li>
                                    <li><CheckCircle2 size={18} /> <strong>Smart energy management</strong> — AI-optimized power flow</li>
                                    <li><CheckCircle2 size={18} /> <strong>Future-proof</strong> — expandable battery and panel capacity</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 450 }}>
                                <Image src="/images/hybrid-diagram.png" alt="Hybrid Solar System Diagram" fill style={{ objectFit: 'contain', borderRadius: 20 }} />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">📊 Comparison</div>
                            <h2 className="section-title">On-Grid vs Off-Grid vs Hybrid</h2>
                            <p className="section-subtitle">A side-by-side comparison to help you choose the right system</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <Sun size={18} /> On-Grid
                                            </div>
                                        </th>
                                        <th>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <Battery size={18} /> Off-Grid
                                            </div>
                                        </th>
                                        <th>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <Cpu size={18} /> Hybrid
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Grid Connection', 'Required', 'Not Required', 'Optional'],
                                        ['Battery Storage', 'No', 'Yes (Required)', 'Yes (Optional)'],
                                        ['Net Metering', '✅ Yes', '❌ No', '✅ Yes'],
                                        ['Power During Outage', '❌ No', '✅ Yes', '✅ Yes'],
                                        ['Initial Cost', '💰 Lowest', '💰💰💰 Highest', '💰💰 Medium'],
                                        ['ROI Period', '3-5 Years', '7-10 Years', '5-7 Years'],
                                        ['Maintenance', 'Very Low', 'Medium', 'Low-Medium'],
                                        ['Government Subsidy', '✅ Available', '❌ Limited', '✅ Available'],
                                        ['Best For', 'Cost savings', 'Remote areas', 'All-round solution'],
                                        ['Complexity', 'Simple', 'Complex', 'Moderate'],
                                        ['Lifespan', '25+ years', '15-20 years', '20-25 years'],
                                    ].map(([feature, onGrid, offGrid, hybrid], i) => (
                                        <tr key={i}>
                                            <td style={{ fontWeight: 600 }}>{feature}</td>
                                            <td>{onGrid}</td>
                                            <td>{offGrid}</td>
                                            <td>{hybrid}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Which System? Guide */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">🤔 Which One?</div>
                            <h2 className="section-title">Which System Is Right For You?</h2>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid">
                        {[
                            {
                                icon: <Sun size={32} />,
                                title: 'Choose On-Grid If...',
                                points: [
                                    'You have reliable grid supply',
                                    'You want lowest cost solution',
                                    'You want to maximize ROI',
                                    'Your primary goal is reducing bills',
                                ],
                                color: '#0FA958',
                            },
                            {
                                icon: <Battery size={32} />,
                                title: 'Choose Off-Grid If...',
                                points: [
                                    'You have no grid connection',
                                    'Your area has very frequent outages',
                                    'You want complete independence',
                                    'You&apos;re in a remote location',
                                ],
                                color: '#3B82F6',
                            },
                            {
                                icon: <Cpu size={32} />,
                                title: 'Choose Hybrid If...',
                                points: [
                                    'You want both savings & backup',
                                    'You have moderate power cuts',
                                    'You want a future-proof system',
                                    'Budget allows for batteries',
                                ],
                                color: '#8B5CF6',
                            },
                        ].map((item, i) => (
                            <AnimatedCard key={item.title} delay={i * 0.15}>
                                <div className="glass-card" style={{
                                    background: `${item.color}08`,
                                    border: `1px solid ${item.color}20`,
                                    backdropFilter: 'none'
                                }}>
                                    <div style={{
                                        width: 64, height: 64, borderRadius: 16,
                                        background: `${item.color}15`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: item.color, marginBottom: 20
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 16 }}>{item.title}</h3>
                                    <ul className="benefit-list">
                                        {item.points.map((p) => (
                                            <li key={p}>
                                                <CheckCircle2 size={16} style={{ color: item.color }} />
                                                <span dangerouslySetInnerHTML={{ __html: p }} />
                                            </li>
                                        ))}
                                    </ul>
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
                            <h2 className="cta-title">Not Sure Which System to Choose?</h2>
                            <p className="cta-subtitle">
                                Our solar experts will visit your site, assess your needs, and recommend the perfect system — absolutely free!
                            </p>
                            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                                <Link href="/contact" className="btn-dark">
                                    Book Free Consultation <ArrowRight size={18} />
                                </Link>
                                <Link href="/solar-calculator" className="btn-secondary">
                                    Try Solar Calculator <TrendingUp size={18} />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
