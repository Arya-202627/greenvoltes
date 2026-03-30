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
  ChevronRight, Sparkles
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
                <span>Kerala&apos;s Premium Solar Partner</span>
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
            Experience the next generation of renewable energy. High-efficiency,
            interactive, and purely sustainable solutions for a modern Kerala.
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
                title: 'On-Grid Smart',
                desc: 'Intelligent grid connectivity with real-time monitoring and maximum ROI.',
                link: '/solar-systems#on-grid',
              },
              {
                icon: <Battery size={28} />,
                title: 'Off-Grid Core',
                desc: 'Independence by design. Next-gen storage for 24/7 uninterrupted living.',
                link: '/solar-systems#off-grid',
              },
              {
                icon: <Cpu size={28} />,
                title: 'Hybrid Hybrid',
                desc: 'The complete solution. Reliability of grid with security of storage.',
                link: '/solar-systems#hybrid',
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

      {/* ===== WHY CHOOSE US - LUXURY FEEL ===== */}
      <section className="section section-dark reveal-section" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">💎 Premium Standards</div>
            <h2 className="section-title text-white">Why GreenVolt Elite?</h2>
          </div>

          <div className="feature-grid">
            {[
              { icon: <Award size={32} />, title: 'Elite Brands', desc: 'Curated selection of global tier-1 solar technology.' },
              { icon: <Shield size={32} />, title: 'Lifetime Assurance', desc: 'Extended warranties that go beyond the standard.' },
              { icon: <Users size={32} />, title: 'Expert Craftsmen', desc: 'MNRE-certified engineers with passion for perfection.' },
              { icon: <TrendingUp size={32} />, title: 'Maximum Efficiency', desc: 'Highest conversion rates attainable in the market.' },
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

            <h2 className="cta-title">Begin Your Solar Legacy</h2>
            <p className="cta-subtitle">
              Join the luxury movement towards clean energy in Kerala.
              Schedule your exclusive consultation today.
            </p>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="btn-primary"
                style={{ background: 'white', color: 'var(--secondary)', boxShadow: '0 10px 40px rgba(255,255,255,0.2)' }}
                onClick={() => setQuoteOpen(true)}
              >
                REQUEST PROPOSAL <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
