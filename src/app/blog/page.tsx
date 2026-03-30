'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen, Search, Filter } from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

const blogPosts = [
    {
        title: 'Solar Subsidy in Kerala 2025: Everything You Need to Know',
        excerpt: 'Learn about the latest PM Surya Ghar Muft Bijli Yojana and how Kerala homeowners can save up to ₹78,000 on solar installation.',
        category: 'Subsidy',
        date: 'March 15, 2025',
        author: 'GreenVolt Expert',
        image: '/images/hero-solar.png',
    },
    {
        title: 'On-Grid vs Off-Grid vs Hybrid: Which Solar System is Best?',
        excerpt: 'A comprehensive guide to help you choose the right solar system based on your power needs and grid reliability in Kerala.',
        category: 'Guide',
        date: 'March 10, 2025',
        author: 'Tech Team',
        image: '/images/ongrid-diagram.png',
    },
    {
        title: 'How Much Can You Really Save with a 5kW Solar System?',
        excerpt: 'We break down the numbers: Initial cost, government subsidy, monthly savings, and the 25-year ROI of a residential solar setup.',
        category: 'Savings',
        date: 'March 05, 2025',
        author: 'Finance Desk',
        image: '/images/commercial-solar.png',
    },
    {
        title: 'Top 5 Maintenance Tips for Your Rooftop Solar Panels',
        excerpt: 'Keep your solar panels performing at 100% efficiency with these simple cleaning and maintenance tips local to Kerala weather.',
        category: 'Maintenance',
        date: 'February 28, 2025',
        author: 'Support Team',
        image: '/images/hero-solar.png',
    },
    {
        title: 'The Future of Renewable Energy in Kerala',
        excerpt: 'Exploring the growing adoption of green energy in the state and why now is the best time to switch to solar power.',
        category: 'Industry',
        date: 'February 20, 2025',
        author: 'GreenVolt CEO',
        image: '/images/commercial-solar.png',
    },
];

export default function BlogPage() {
    return (
        <>
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Solar Education & Blog</h1>
                        <p>Your guide to solar energy, subsidies, and savings in Kerala</p>
                    </AnimatedSection>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {/* Search & Filter - Decorative for UI */}
                    <AnimatedSection>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            marginBottom: 48, gap: 24, flexWrap: 'wrap'
                        }}>
                            <div style={{ position: 'relative', flex: 1, maxWidth: 400 }}>
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="form-input"
                                    style={{ paddingLeft: 44 }}
                                />
                                <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            </div>
                            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                                {['All', 'Subsidy', 'Guide', 'Savings', 'Tips'].map((cat) => (
                                    <button key={cat} style={{
                                        padding: '8px 16px', borderRadius: 100, border: '1px solid #E2E8F0',
                                        background: cat === 'All' ? '#0FA958' : 'white',
                                        color: cat === 'All' ? 'white' : '#475569',
                                        fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer'
                                    }}>
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Blog Grid */}
                    <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {blogPosts.map((post, i) => (
                            <AnimatedCard key={i} delay={i * 0.1}>
                                <div className="blog-card">
                                    <div className="blog-image">
                                        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                        <div className="blog-category">{post.category}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {post.date}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><User size={14} /> {post.author}</span>
                                        </div>
                                        <h3 className="blog-title" style={{ marginTop: 12, height: '3.5rem', overflow: 'hidden' }}>{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <Link href="#" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 8,
                                            color: '#0FA958', fontWeight: 600, textDecoration: 'none',
                                            marginTop: 16, fontSize: '0.9rem'
                                        }}>
                                            Read Article <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Guide CTA */}
            <section className="section section-dark">
                <div className="container">
                    <AnimatedSection>
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
                            background: 'rgba(255,255,255,0.03)', padding: 48, borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div>
                                <div style={{ color: '#0FA958', fontWeight: 700, textTransform: 'uppercase', marginBottom: 12 }}>Free Download</div>
                                <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: 16 }}>Solar Buying Guide for Kerala Homeowners</h2>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                                    Avoid common mistakes and save lakhs. Our 20-page guide covers everything from roof
                                    eligibility to checking installer certifications.
                                </p>
                                <div style={{ display: 'flex', gap: 16 }}>
                                    <button className="btn-primary">Download Guide</button>
                                    <Link href="/contact" className="btn-secondary">Ask a Question</Link>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{
                                    width: 280, height: 380, background: '#0A1628', borderRadius: 16,
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid #0FA958',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    padding: 32, textAlign: 'center', position: 'relative', overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'absolute', top: 0, right: 0, padding: 12, background: '#0FA958', color: 'white', fontWeight: 700, fontSize: '0.7rem' }}>NEW 2025</div>
                                    <BookOpen size={64} color="#0FA958" style={{ marginBottom: 24 }} />
                                    <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: 8 }}>Ultimate Solar Guide</h4>
                                    <p style={{ color: '#64748B', fontSize: '0.8rem' }}>GreenVolt Energy Solutions</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
                            <h2 className="section-title">Stay Updated</h2>
                            <p className="section-subtitle">
                                Subscribe to our newsletter for the latest solar news, subsidy updates, and energy saving tips.
                            </p>
                            <form style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                                <input type="email" placeholder="Enter your email address" className="form-input" style={{ flex: 1 }} />
                                <button type="button" className="btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
