'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/solar-systems', label: 'Solar Systems' },
    { href: '/projects', label: 'Projects' },
    { href: '/solar-calculator', label: 'Calculator' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative', width: 220, height: 60 }}>
            <Image
              src="/images/logo.png"
              alt="GreenVolt Logo"
              fill
              unoptimized
              className="navbar-logo-img"
              style={{ objectFit: 'contain' }}
              // This ensures if image is missing, we don't just see a broken box
              onError={(e) => {
                const target = e.target as any;
                target.style.display = 'none';
                const fallback = document.getElementById('logo-fallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div id="logo-fallback" style={{ display: 'none', fontWeight: 800, fontSize: '1.5rem', color: 'white', whiteSpace: 'nowrap' }}>
              GREEN<span style={{ color: '#0FA958' }}>VOLT</span> ENERGY
            </div>
          </div>
        </Link>


        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {mobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <X size={28} />
            </button>
          )}
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="navbar-cta" onClick={() => setMobileOpen(false)}>
              Get Free Quote
            </Link>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
