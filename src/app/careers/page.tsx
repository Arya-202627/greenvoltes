'use client';

import { useState, useRef, ChangeEvent, FormEvent, DragEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase, CheckCircle2, Phone, Mail, MapPin, Upload,
    FileText, X, ArrowRight, Sparkles, Award, TrendingUp,
    Users, ShieldCheck, Sun, Leaf, Zap, HelpCircle, Eye
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

export default function CareersPage() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [qualification, setQualification] = useState('Minimum 12th pass');
    const [experience, setExperience] = useState('Fresher (0 - 1 year)');
    const [message, setMessage] = useState('');
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showFlyerModal, setShowFlyerModal] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Format file size
    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    // Handle File Selection
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileError('');
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            validateAndSetFile(file);
        }
    };

    // Validate File
    const validateAndSetFile = (file: File) => {
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        const isPdfOrDoc = allowedTypes.includes(file.type) ||
            file.name.endsWith('.pdf') ||
            file.name.endsWith('.doc') ||
            file.name.endsWith('.docx');

        if (!isPdfOrDoc) {
            setFileError('Please upload a valid PDF or Word document (.pdf, .doc, .docx).');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            setFileError('File size exceeds 10MB limit. Please upload a smaller file.');
            return;
        }

        setResumeFile(file);
        setFileError('');
    };

    // Drag & Drop Handlers
    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    // Form Submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!fullName.trim() || !phone.trim() || !email.trim()) {
            alert('Please fill out all required contact fields.');
            return;
        }

        if (!resumeFile) {
            setFileError('Please select or upload your resume/CV before submitting.');
            return;
        }

        // WhatsApp pre-formatted message
        const waText = `🚀 *New Job Application: Solar Sales Executive*%0A%0A` +
            `━━━━━━━━━━━━━━━━━━━━%0A` +
            `👤 *Full Name:* ${fullName}%0A` +
            `📱 *Phone / WhatsApp:* ${phone}%0A` +
            `📧 *Email:* ${email}%0A` +
            `📍 *Location:* ${location || 'Kerala'}%0A` +
            `🎓 *Qualification:* ${qualification}%0A` +
            `💼 *Experience:* ${experience}%0A` +
            `📎 *Resume Uploaded:* ${resumeFile.name} (${formatFileSize(resumeFile.size)})%0A` +
            (message ? `📝 *Note:* ${message}%0A` : '') +
            `━━━━━━━━━━━━━━━━━━━━%0A%0A` +
            `_I am attaching my resume file below. Looking forward to your response!_`;

        // Direct WhatsApp launch
        const whatsappUrl = `https://wa.me/918129920094?text=${waText}`;
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
    };

    // Direct Email trigger
    const handleEmailApplication = () => {
        const subject = encodeURIComponent(`Job Application: Solar Sales Executive - ${fullName || 'Candidate'}`);
        const body = encodeURIComponent(
            `Dear GreenVolt HR Team,\n\n` +
            `I would like to apply for the Solar Sales Executive position at GreenVolt Energy Solutions LLP.\n\n` +
            `Here are my details:\n` +
            `• Full Name: ${fullName}\n` +
            `• Contact Number: ${phone}\n` +
            `• Email: ${email}\n` +
            `• Location: ${location}\n` +
            `• Highest Qualification: ${qualification}\n` +
            `• Experience: ${experience}\n` +
            (message ? `• Additional Message: ${message}\n` : '') +
            `\nI have attached my resume (${resumeFile ? resumeFile.name : 'CV.pdf'}) with this email for your review.\n\n` +
            `Best regards,\n${fullName}`
        );
        window.location.href = `mailto:Greenvoltenergy.co@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            {/* ===== PAGE HEADER ===== */}
            <div className="page-header" style={{ padding: '140px 24px 60px', background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', borderBottom: '1px solid #E2E8F0' }}>
                <div className="page-header-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <AnimatedSection>
                        <div className="hiring-badge-pulse">
                            <Sparkles size={16} /> WE ARE HIRING!
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: 'var(--secondary)', fontWeight: 800, marginBottom: 16, lineHeight: 1.15 }}>
                            Build Your Career in <span style={{ color: '#10B981' }}>Clean Energy</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '680px', margin: '0 auto 24px', lineHeight: 1.7 }}>
                            Join GreenVolt Energy Solutions and be a part of the renewable revolution.
                            Powering homes, businesses, and a sustainable tomorrow across Kerala.
                        </p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#open-roles" className="btn-primary" style={{ textDecoration: 'none' }}>
                                View Open Roles <ArrowRight size={18} />
                            </a>
                            <button
                                onClick={() => setShowFlyerModal(true)}
                                className="btn-secondary"
                                style={{ background: 'white', color: 'var(--secondary)', borderColor: '#CBD5E1', display: 'flex', alignItems: 'center', gap: 8 }}
                            >
                                <Eye size={18} /> View Hiring Poster
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* ===== FLYER PREVIEW MODAL ===== */}
            <AnimatePresence>
                {showFlyerModal && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowFlyerModal(false)}
                        style={{ zIndex: 9999, background: 'rgba(10, 22, 40, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, position: 'fixed', inset: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ background: 'white', borderRadius: 20, overflow: 'hidden', maxWidth: '520px', width: '100%', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}
                        >
                            <button
                                onClick={() => setShowFlyerModal(false)}
                                style={{ position: 'absolute', top: 16, right: 16, zIndex: 10, background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <X size={20} />
                            </button>
                            <div style={{ position: 'relative', width: '100%', height: '650px' }}>
                                <Image
                                    src="/images/hiring-poster.jpg"
                                    alt="GreenVolt Hiring Poster"
                                    fill
                                    style={{ objectFit: 'contain', background: '#F8FAFC' }}
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== OPEN POSITIONS SECTION ===== */}
            <section id="open-roles" className="section bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header" style={{ marginBottom: '48px', textAlign: 'center' }}>
                            <div className="section-badge">🚀 Current Openings</div>
                            <h2 className="section-title">Open Position</h2>
                            <p className="section-subtitle">
                                Explore our immediate vacancy and discover the rewards of a green energy career.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Featured Job Card */}
                    <div className="job-card-box" style={{ maxWidth: '1000px', margin: '0 auto', borderTop: '4px solid #10B981' }}>
                        {/* Header Details */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20, paddingBottom: 28, borderBottom: '1px solid #E2E8F0' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                                    <span style={{ background: '#DCFCE7', color: '#15803D', padding: '4px 12px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 700 }}>
                                        IMMEDIATE REQUIREMENT
                                    </span>
                                    <span style={{ background: '#E0F2FE', color: '#0369A1', padding: '4px 12px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 700 }}>
                                        FULL TIME
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: 6 }}>
                                    Solar Sales Executive
                                </h3>
                                <p style={{ color: '#059669', fontWeight: 700, fontSize: '1.1rem' }}>
                                    &ldquo;Let&apos;s power homes, businesses and a better future!&rdquo;
                                </p>
                            </div>

                            <a
                                href="#apply-now"
                                className="btn-primary"
                                style={{ padding: '14px 28px', textDecoration: 'none' }}
                            >
                                Apply Now <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* Pills */}
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '24px 0 32px' }}>
                            <div className="job-feature-pill">
                                <MapPin size={16} color="#10B981" /> Kerala (Field / Client Sites)
                            </div>
                            <div className="job-feature-pill">
                                <Briefcase size={16} color="#10B981" /> Sales & Business Development
                            </div>
                            <div className="job-feature-pill">
                                <Award size={16} color="#10B981" /> Attractive Salary + Performance Incentives
                            </div>
                            <div className="job-feature-pill">
                                <TrendingUp size={16} color="#10B981" /> Training & Growth Opportunities
                            </div>
                        </div>

                        {/* Role Description */}
                        <div style={{ background: '#F8FAFC', borderRadius: 16, padding: '24px', marginBottom: 36, borderLeft: '4px solid #003366' }}>
                            <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                                We are looking for enthusiastic and target-driven individuals to join our team and help us power homes and businesses with clean, sustainable energy.
                                As a Solar Sales Executive, you will be the face of GreenVolt, introducing residential and commercial clients to the benefits of rooftop solar energy.
                            </p>
                        </div>

                        {/* Requirements vs Offer Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                            {/* Requirements */}
                            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '28px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0, 51, 102, 0.1)', color: '#003366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#003366', margin: 0 }}>
                                        Requirements
                                    </h4>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    {[
                                        'Good communication & interpersonal skills',
                                        'Passion for sales and meeting targets',
                                        'Basic knowledge of solar industry is an advantage',
                                        'Willingness to travel to client sites',
                                        'Minimum 12th pass / Any degree'
                                    ].map((req, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#475569', fontSize: '0.95rem' }}>
                                            <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: 3 }} />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* What We Offer */}
                            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 16, padding: '28px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Award size={24} />
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#003366', margin: 0 }}>
                                        What We Offer
                                    </h4>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    {[
                                        'Attractive salary with performance incentives',
                                        'Growth opportunities & comprehensive training',
                                        'Supportive & energetic team environment',
                                        'Be a part of a mission-driven green energy company',
                                        'Rewarding commission structures on completed solar installations'
                                    ].map((offer, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#475569', fontSize: '0.95rem' }}>
                                            <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: 3 }} />
                                            <span>{offer}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Quick Direct Contacts */}
                        <div style={{ marginTop: 36, padding: '24px 28px', background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', borderRadius: 16, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
                            <div>
                                <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: 4 }}>
                                    Ready to make an impact?
                                </h5>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                                    Send your CV and start your journey with Green Volt!
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <a
                                    href="https://wa.me/918129920094?text=Hi%20GreenVolt,%20I%20am%20interested%20in%20applying%20for%20the%20Solar%20Sales%20Executive%20role."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 8,
                                        background: '#25D366', color: 'white', padding: '10px 18px',
                                        borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
                                    }}
                                >
                                    <Phone size={16} /> WhatsApp: 8129920094
                                </a>

                                <a
                                    href="mailto:Greenvoltenergy.co@gmail.com?subject=Job%20Inquiry:%20Solar%20Sales%20Executive"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 8,
                                        background: '#003366', color: 'white', padding: '10px 18px',
                                        borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none'
                                    }}
                                >
                                    <Mail size={16} /> Greenvoltenergy.co@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== APPLICATION & RESUME UPLOAD FORM ===== */}
            <section id="apply-now" className="section section-grey" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '840px' }}>
                    <AnimatedSection>
                        <div className="section-header" style={{ marginBottom: 40, textAlign: 'center' }}>
                            <div className="section-badge">📄 Submit Your Application</div>
                            <h2 className="section-title">Upload Your Resume & Apply</h2>
                            <p className="section-subtitle">
                                Complete the brief form below and attach your CV. Our hiring team will review your application and get in touch.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{ background: '#ffffff', borderRadius: 24, padding: '44px 36px', boxShadow: '0 10px 35px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center', padding: '30px 10px' }}
                            >
                                <div style={{
                                    width: 76, height: 76, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #10B981, #059669)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 24px', color: 'white'
                                }}>
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', fontWeight: 800, marginBottom: 12 }}>
                                    Application Prepared Successfully! 🎉
                                </h3>
                                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 28px' }}>
                                    Thank you, <strong style={{ color: 'var(--secondary)' }}>{fullName}</strong>.
                                    To ensure our recruitment team receives your resume document directly, please tap below to share it directly via WhatsApp or Email:
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: '420px', margin: '0 auto' }}>
                                    <a
                                        href={`https://wa.me/918129920094?text=${encodeURIComponent(`Hi GreenVolt HR! I am ${fullName}. I have applied for the Solar Sales Executive position and am sending my resume file.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ background: '#25D366', borderColor: '#25D366', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, textDecoration: 'none' }}
                                    >
                                        <Phone size={18} /> Send Resume on WhatsApp (8129920094)
                                    </a>

                                    <button
                                        onClick={handleEmailApplication}
                                        className="btn-secondary"
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, background: '#F8FAFC', color: 'var(--secondary)', borderColor: '#CBD5E1' }}
                                    >
                                        <Mail size={18} /> Email Resume to Greenvoltenergy.co@gmail.com
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setResumeFile(null);
                                            setFullName('');
                                            setPhone('');
                                            setEmail('');
                                            setMessage('');
                                        }}
                                        style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.9rem', cursor: 'pointer', marginTop: 8 }}
                                    >
                                        Submit another application
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                                    {/* Full Name */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-name">
                                            Full Name *
                                        </label>
                                        <input
                                            id="applicant-name"
                                            type="text"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Enter your full name"
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Phone / WhatsApp */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-phone">
                                            Phone / WhatsApp Number *
                                        </label>
                                        <input
                                            id="applicant-phone"
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-email">
                                            Email Address *
                                        </label>
                                        <input
                                            id="applicant-email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            className="form-input"
                                        />
                                    </div>

                                    {/* Location */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-location">
                                            Current Location / District (Kerala) *
                                        </label>
                                        <input
                                            id="applicant-location"
                                            type="text"
                                            required
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="e.g. Ernakulam, Thrissur, Kozhikode"
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                                    {/* Qualification */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-qualification">
                                            Highest Qualification *
                                        </label>
                                        <select
                                            id="applicant-qualification"
                                            value={qualification}
                                            onChange={(e) => setQualification(e.target.value)}
                                            className="form-select"
                                        >
                                            <option value="Minimum 12th pass">12th Pass</option>
                                            <option value="Diploma in Engineering / Commercial">Diploma</option>
                                            <option value="Bachelor's Degree (Any Stream)">Bachelor&apos;s Degree (Any Stream)</option>
                                            <option value="B.Tech / B.E (Electrical / Mechanical / Any)">B.Tech / Engineering</option>
                                            <option value="Master's Degree (MBA / M.Sc / Other)">Master&apos;s Degree</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Experience */}
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="applicant-experience">
                                            Experience in Sales / Solar *
                                        </label>
                                        <select
                                            id="applicant-experience"
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)}
                                            className="form-select"
                                        >
                                            <option value="Fresher (0 - 1 year)">Fresher (0 - 1 year)</option>
                                            <option value="1 - 2 Years Sales Experience">1 - 2 Years Sales Experience</option>
                                            <option value="2 - 5 Years in Solar / Electrical">2 - 5 Years in Solar / Electrical</option>
                                            <option value="5+ Years Experience">5+ Years Experience</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Drag & Drop Resume Upload Box */}
                                <div className="form-group" style={{ marginTop: 8 }}>
                                    <label className="form-label">
                                        Upload Resume / CV * (PDF, DOC, DOCX up to 10MB)
                                    </label>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />

                                    <div
                                        className={`upload-dropzone ${dragActive ? 'active' : ''}`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <div style={{
                                            width: 56, height: 56, borderRadius: '50%',
                                            background: 'rgba(16, 185, 129, 0.1)', color: '#10B981',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto 12px'
                                        }}>
                                            <Upload size={26} />
                                        </div>
                                        <p style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: 4 }}>
                                            Click to browse or drag and drop your resume file here
                                        </p>
                                        <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
                                            Accepted formats: PDF (.pdf) or Word document (.doc, .docx)
                                        </p>
                                    </div>

                                    {/* File Selected Badge */}
                                    {resumeFile && (
                                        <div className="file-preview-card">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                <div style={{ width: 38, height: 38, borderRadius: 8, background: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#065F46' }}>
                                                        {resumeFile.name}
                                                    </div>
                                                    <div style={{ fontSize: '0.8rem', color: '#047857' }}>
                                                        {formatFileSize(resumeFile.size)} • Ready to submit
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setResumeFile(null);
                                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                                }}
                                                style={{ background: 'none', border: 'none', color: '#991B1B', cursor: 'pointer', padding: 6 }}
                                                title="Remove file"
                                            >
                                                <X size={18} />
                                            </button>
                                        </div>
                                    )}

                                    {fileError && (
                                        <p style={{ color: '#DC2626', fontSize: '0.85rem', marginTop: 8 }}>
                                            {fileError}
                                        </p>
                                    )}
                                </div>

                                {/* Short Message */}
                                <div className="form-group">
                                    <label className="form-label" htmlFor="applicant-message">
                                        Why are you interested in joining GreenVolt? (Optional)
                                    </label>
                                    <textarea
                                        id="applicant-message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Briefly tell us about your sales passion, solar interest, or relevant background..."
                                        rows={3}
                                        className="form-textarea"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ width: '100%', padding: '16px', fontSize: '1.05rem', justifyContent: 'center', marginTop: 12 }}
                                >
                                    Submit Application & Resume <ArrowRight size={18} />
                                </button>

                                <p style={{ fontSize: '0.85rem', color: '#64748B', textAlign: 'center', marginTop: 14 }}>
                                    ⚡ Submitting will notify our HR team on WhatsApp and Email directly.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ===== CORE VALUES (FROM FLYER FOOTER) ===== */}
            <section className="section bg-white" style={{ padding: '80px 0' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: 48 }}>
                            <div className="section-badge">🌱 Our Culture</div>
                            <h2 className="section-title">Why Work With GreenVolt?</h2>
                            <p className="section-subtitle">
                                The four pillars that guide our teamwork and impact across Kerala.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                        {[
                            {
                                icon: <Sun size={32} color="#10B981" />,
                                title: 'Clean Energy',
                                desc: 'Better for today, best for tomorrow.'
                            },
                            {
                                icon: <Leaf size={32} color="#059669" />,
                                title: 'Sustainable Future',
                                desc: 'Small actions, big impact.'
                            },
                            {
                                icon: <Zap size={32} color="#003366" />,
                                title: 'Powering Tomorrow',
                                desc: 'Reliable energy for a better tomorrow.'
                            },
                            {
                                icon: <Users size={32} color="#004B8D" />,
                                title: 'Strong Team, Better Future',
                                desc: 'Together, we achieve more.'
                            }
                        ].map((pillar, i) => (
                            <div key={pillar.title} className="pillar-card">
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: '#F4F7FA', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', margin: '0 auto 16px'
                                }}>
                                    {pillar.icon}
                                </div>
                                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: 8 }}>
                                    {pillar.title}
                                </h4>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HIRING PROCESS STEPS ===== */}
            <section className="section section-grey" style={{ padding: '80px 0' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header" style={{ textAlign: 'center', marginBottom: 48 }}>
                            <div className="section-badge">📋 Transparent Process</div>
                            <h2 className="section-title">How Our Hiring Works</h2>
                        </div>
                    </AnimatedSection>

                    <div className="process-grid">
                        {[
                            { step: '01', title: 'Submit Application', desc: 'Fill out your contact details and upload your CV / resume.' },
                            { step: '02', title: 'Resume Review', desc: 'Our HR team evaluates your profile within 48 business hours.' },
                            { step: '03', title: 'Interview & Discussion', desc: 'A quick discussion to understand your passion for sales and solar.' },
                            { step: '04', title: 'Offer & Onboarding', desc: 'Welcome aboard GreenVolt with structured product & sales training!' }
                        ].map((item) => (
                            <div key={item.step} className="process-step">
                                <div className="process-number">{item.step}</div>
                                <h3 className="process-title" style={{ color: 'var(--secondary)' }}>{item.title}</h3>
                                <p className="process-desc" style={{ color: '#64748B' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
