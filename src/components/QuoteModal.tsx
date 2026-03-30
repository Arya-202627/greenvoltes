'use client';

import { useState, FormEvent } from 'react';
import { X, Send, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            <X size={18} />
                        </button>

                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px'
                                }}>
                                    <Zap size={36} color="white" />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Thank You! ⚡</h3>
                                <p style={{ color: '#64748B' }}>
                                    We&apos;ve received your request. Our team will contact you within 24 hours with a free solar consultation.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div style={{ marginBottom: 24 }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Get Your Free Solar Quote</h3>
                                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                                        Fill in the details below and our solar experts will contact you shortly.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="quote-name">Full Name *</label>
                                        <input className="form-input" type="text" id="quote-name" required placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="quote-phone">Phone Number *</label>
                                        <input className="form-input" type="tel" id="quote-phone" required placeholder="+91 XXXXX XXXXX" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="quote-location">Location *</label>
                                        <input className="form-input" type="text" id="quote-location" required placeholder="City / District" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="quote-requirement">Requirement</label>
                                        <select className="form-select" id="quote-requirement">
                                            <option value="">Select System Type</option>
                                            <option value="on-grid">On-Grid Solar System</option>
                                            <option value="off-grid">Off-Grid Solar System</option>
                                            <option value="hybrid">Hybrid Solar System</option>
                                            <option value="battery">Battery / UPS System</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="quote-bill">Monthly Electricity Bill (₹)</label>
                                        <input className="form-input" type="number" id="quote-bill" placeholder="e.g. 3000" />
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Send size={18} />
                                        Get Free Quote
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
