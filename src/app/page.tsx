'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sun, Battery, Zap, Shield, ArrowRight, Star,
  Phone, TrendingUp, Award, Users, MapPin,
  Cpu, Home, Building2, IndianRupee,
  ClipboardCheck, Palette, Wrench, Headphones,
  ChevronRight, Sparkles, Factory, Heart,
  GraduationCap, Hotel, ShoppingBag, Warehouse,
  Landmark, HardHat
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import QuoteModal from '@/components/QuoteModal';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Parallax with Framer Motion
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 400]);
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Smooth scroll reveals with GSAP
  useEffect(() => {
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Energy Ripple Click Handler
  const handleHeroClick = (e: React.MouseEvent) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 800);
  };

  return (
    <>
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Energy Ripples Overlay */}
      <div className="energy-ripple">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-circle"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </div>

      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        ref={heroRef}
        onClick={handleHeroClick}
        style={{ cursor: 'pointer' }}
      >
        <motion.div className="hero-bg" style={{ y: yBg }}>
          <Image
            src="/images/hero-solar.png"
            alt="Solar panels on Kerala rooftop"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={100}
            unoptimized
          />
          <div className="sun-glow" style={{ top: '20%', right: '15%' }} />
        </motion.div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-badge" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-400" />
                <span>Kerala&apos;s Complete Energy Solutions Partner</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Touching Energy ⚡<br />
            <span>Futuristic Solar</span> Solutions
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience the next generation of energy solutions. Solar power, smart automation, and industrial systems for a modern Kerala.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(15, 169, 88, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: ["0 0 0px rgba(15, 169, 88, 0)", "0 0 30px rgba(15, 169, 88, 0.3)", "0 0 0px rgba(15, 169, 88, 0)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="btn-primary"
              onClick={(e) => { e.stopPropagation(); setQuoteOpen(true); }}
            >
              Get Free Quote <ArrowRight size={18} />
            </motion.button>
            <Link href="tel:+918714889721" className="btn-secondary" onClick={(e) => e.stopPropagation()}>
              <Phone size={18} /> Call Specialist
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            style={{ opacity }}
          >
            {[
              { num: '500+', label: 'Premium Projects' },
              { num: '10MW+', label: 'Green Energy' },
              { num: '100%', label: 'Joy Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero-stat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
              >
                <div className="hero-stat-number">{stat.num.split('')[0]}<span className="text-green-400">{stat.num.slice(1)}</span></div>
                <div className="hero-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PREMIUM SERVICES ===== */}
      <section className="section bg-white reveal-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">⚡ The Experience</div>
            <h2 className="section-title">Seamless Energy Solutions</h2>
            <p className="section-subtitle">
              Intelligent solar ecosystems designed to integrate perfectly with your life.
            </p>
          </div>

          <div className="feature-grid">
            {[
              {
                icon: <Sun size={28} />,
                title: 'Renewable Energy Solutions',
                desc: 'Complete solar power solutions from residential rooftops to industrial EPC, with net metering and maintenance support.',
                link: '/services',
              },
              {
                icon: <Cpu size={28} />,
                title: 'Smart Power & Automation',
                desc: 'Intelligent automation for homes and buildings — CCTV, access control, EV charging, and smart energy monitoring.',
                link: '/services',
              },
              {
                icon: <Zap size={28} />,
                title: 'Industrial Power Solutions',
                desc: 'Engineered power systems — PCC, MCC, APFC panels, VFD drives, and hybrid power systems for maximum uptime.',
                link: '/services',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                style={{ perspective: 1000 }}
              >
                <Link href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="premium-card">
                    <div className="service-card-icon">{service.icon}</div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-green-600 font-bold text-sm">
                      EXPLORE <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="section section-grey reveal-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🏢 Sectors</div>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Delivering intelligent, reliable and sustainable solutions across diverse sectors
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {[
              { icon: <Home size={32} />, title: 'Residential Developments' },
              { icon: <Building2 size={32} />, title: 'Commercial Buildings' },
              { icon: <Factory size={32} />, title: 'Industrial Facilities' },
              { icon: <Heart size={32} />, title: 'Hospitals' },
              { icon: <GraduationCap size={32} />, title: 'Educational Institutions' },
              { icon: <Hotel size={32} />, title: 'Hotels & Hospitality' },
              { icon: <ShoppingBag size={32} />, title: 'Retail Spaces' },
              { icon: <Warehouse size={32} />, title: 'Warehouses' },
              { icon: <Landmark size={32} />, title: 'Government Projects' },
              { icon: <HardHat size={32} />, title: 'Infrastructure Developments' },
            ].map((ind, i) => (
              <motion.div
                key={ind.title}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                style={{ 
                  background: 'white', 
                  padding: '30px 20px', 
                  borderRadius: '16px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ color: 'var(--primary)', background: 'rgba(15,169,88,0.1)', padding: '16px', borderRadius: '50%' }}>
                  {ind.icon}
                </div>
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--secondary)' }}>{ind.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US - LUXURY FEEL ===== */}
      <section className="section section-dark reveal-section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">💎 Premium Standards</div>
            <h2 className="section-title text-white">Why GreenVolt Elite?</h2>
          </div>

          <div className="feature-grid">
            {[
              { icon: <Award size={32} />, title: 'Complete Turnkey Solutions', desc: 'End-to-end services from design to commissioning and beyond' },
              { icon: <Shield size={32} />, title: 'Licensed Electrical Expertise', desc: 'Grade A Licensed Electrical Contractor with full compliance' },
              { icon: <Users size={32} />, title: 'MNRE Empanelled Vendor', desc: 'Authorized to offer MNRE compliant grid-interactive and standalone energy solutions' },
              { icon: <TrendingUp size={32} />, title: 'Reliable After-Sales Service', desc: 'Prompt assistance and technical support for continued performance' },
            ].map((item, i) => (
              <div key={item.title} className="glass-card">
                <div className="why-icon" style={{ background: 'rgba(15,169,88,0.1)' }}>{item.icon}</div>
                <h3 className="text-white mb-2 font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND QUOTE ===== */}
      <section className="section bg-white reveal-section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '2rem', fontStyle: 'italic', color: 'var(--secondary)', lineHeight: 1.5, fontWeight: 300 }}>
              &ldquo;We deliver more than solutions. We build lasting partnerships powered by trust, quality and performance.&rdquo;
            </h3>
          </motion.div>
        </div>
      </section>

      {/* ===== CONVERSION CTA - INTERACTIVE ===== */}
      <section className="section reveal-section">
        <div className="container">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="cta-banner"
            style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #0FA958 150%)',
              padding: '80px 48px'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-64 h-64 border border-white/10 rounded-full"
            />

            <h2 className="cta-title">Powering Today. Sustaining Tomorrow.</h2>
            <p className="cta-subtitle">
              Join the movement towards clean, smart energy in Kerala. Schedule your consultation today.
            </p>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="btn-primary"
                  style={{ background: 'white', color: 'var(--secondary)', boxShadow: '0 10px 40px rgba(255,255,255,0.2)' }}
                >
                  REQUEST CONSULTATION <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
