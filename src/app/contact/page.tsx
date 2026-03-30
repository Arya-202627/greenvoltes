'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Contact Us</h1>
                        <p>Get in touch with our solar experts for a free consultation and quote</p>
                    </AnimatedSection>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
                        {/* Contact Info */}
                        <AnimatedSection>
                            <div>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: 8 }}>Get In Touch</h2>
                                <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 32 }}>
                                    Have questions about solar energy? Need a quote? We&apos;re here to help.
                                    Reach out to us and our team will respond within 24 hours.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    {[
                                        {
                                            icon: <Phone size={22} />,
                                            title: 'Phone',
                                            lines: ['+91 8714889721'],
                                        },
                                        {
                                            icon: <Mail size={22} />,
                                            title: 'Email Us',
                                            lines: [
                                                'Sales: sales@greenvoltes.in',
                                                'Support: support@greenvoltes.in',
                                                'General: info@greenvoltes.in'
                                            ],
                                        },
                                        {
                                            icon: <MapPin size={22} />,
                                            title: 'Office',
                                            lines: ['66/1150, Suite No. A6', 'Kalabhavan Road, Kaloor', 'Ernakulam - 682018, Kerala'],
                                        },
                                        {
                                            icon: <Clock size={22} />,
                                            title: 'Working Hours',
                                            lines: ['Mon - Sat: 9:00 AM - 6:30 PM', 'Sunday: By Appointment'],
                                        },
                                    ].map((item) => (
                                        <div key={item.title} style={{ display: 'flex', gap: 16 }}>
                                            <div style={{
                                                width: 48, height: 48, borderRadius: 12,
                                                background: 'rgba(15,169,88,0.1)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#0FA958', flexShrink: 0
                                            }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                                                {item.lines.map((line, idx) => (
                                                    <div key={idx} style={{ color: '#475569', fontSize: '0.95rem' }}>{line}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
                                    <a
                                        href="https://wa.me/918714889721"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
                                    >
                                        <MessageCircle size={18} /> WhatsApp Us
                                    </a>
                                    <a href="tel:+918714889721" className="btn-outline">
                                        <Phone size={18} /> Call Now
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection delay={0.2}>
                            <div style={{
                                background: 'white', borderRadius: 24, padding: 40,
                                border: '1px solid #E2E8F0', boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                            }}>
                                {submitted ? (
                                    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                        <div style={{
                                            width: 80, height: 80, borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto 24px', color: 'white'
                                        }}>
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Message Sent!</h3>
                                        <p style={{ color: '#64748B', lineHeight: 1.7 }}>
                                            Thank you for reaching out. Our solar experts will contact you within 24 hours
                                            with a personalized solar solution for your needs.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-outline"
                                            style={{ marginTop: 24 }}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: 4 }}>Send Us a Message</h3>
                                        <p style={{ color: '#64748B', marginBottom: 24, fontSize: '0.95rem' }}>
                                            Fill in the form below and we&apos;ll get back to you shortly.
                                        </p>

                                        <form onSubmit={handleSubmit}>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                                                    <input className="form-input" type="text" id="contact-name" required placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                                                    <input className="form-input" type="tel" id="contact-phone" required placeholder="+91 XXXXX XXXXX" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="contact-location">Location *</label>
                                                <input className="form-input" type="text" id="contact-location" required placeholder="City / District in Kerala" />
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="contact-requirement">Requirement *</label>
                                                <select className="form-select" id="contact-requirement" required>
                                                    <option value="">Select your requirement</option>
                                                    <option value="on-grid">On-Grid Solar System</option>
                                                    <option value="off-grid">Off-Grid Solar System</option>
                                                    <option value="hybrid">Hybrid Solar System</option>
                                                    <option value="battery">Battery / UPS System</option>
                                                    <option value="commercial">Commercial Solar Project</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="contact-size">System Size (Optional)</label>
                                                <select className="form-select" id="contact-size">
                                                    <option value="">Select system size</option>
                                                    <option value="1-3kw">1 - 3 kW</option>
                                                    <option value="3-5kw">3 - 5 kW</option>
                                                    <option value="5-10kw">5 - 10 kW</option>
                                                    <option value="10-50kw">10 - 50 kW</option>
                                                    <option value="50kw+">50 kW+</option>
                                                    <option value="not-sure">Not Sure</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label className="form-label" htmlFor="contact-message">Additional Details</label>
                                                <textarea className="form-textarea" id="contact-message" placeholder="Tell us about your requirements, monthly electricity bill, roof type, etc." />
                                            </div>

                                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                                <Send size={18} /> Send Message
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="section section-grey" style={{ paddingTop: 0 }}>
                <div className="container">
                    <AnimatedSection>
                        <div style={{ borderRadius: 20, overflow: 'hidden', height: 400, border: '1px solid #E2E8F0' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3243171!2d76.287!3d9.993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba672!2sKaloor, Kochi, Kerala!5e0!3m2!1sen!2sin!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GreenVolt Office Location"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
