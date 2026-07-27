import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                        <Image
                            src="/images/logo.png"
                            alt="GreenVolt Logo"
                            width={200}
                            height={60}
                            unoptimized
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <p className="footer-brand-desc">
                        GreenVolt Energy Solutions LLP is Kerala&apos;s trusted partner for comprehensive energy solutions.
                        We provide Solar, Smart Automation, and Industrial Power solutions,
                        making advanced energy accessible, efficient, and sustainable.
                    </p>
                </div>

                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/solar-systems">Solar Systems</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/solar-calculator">Solar Calculator</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-heading">Services</h4>
                    <ul className="footer-links">
                        <li><Link href="/services#renewable">Renewable Energy</Link></li>
                        <li><Link href="/services#smart-power">Smart Automation</Link></li>
                        <li><Link href="/services#industrial">Industrial Power</Link></li>
                        <li><Link href="/services#battery">Battery Systems</Link></li>
                        <li><Link href="/services#cctv">CCTV & Security</Link></li>
                        <li><Link href="/services#residential">Residential</Link></li>
                        <li><Link href="/services#commercial">Commercial</Link></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="footer-contact-item">
                            <Phone size={18} />
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--secondary)' }}>Call Us:</div>
                                <div>+91 8714889721</div>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <Mail size={18} />
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: 4 }}>Email Us:</div>
                                <div style={{ marginBottom: 2 }}><span style={{ color: '#0FA958' }}>Sales:</span> sales@greenvoltes.in</div>
                                <div style={{ marginBottom: 2 }}><span style={{ color: '#0FA958' }}>Support:</span> support@greenvoltes.in</div>
                                <div><span style={{ color: '#0FA958' }}>General:</span> info@greenvoltes.in</div>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <MapPin size={18} />
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--secondary)' }}>Visit Us:</div>
                                <div>66/1150, Suite No. A6</div>
                                <div>Kalabhavan Road, Kaloor</div>
                                <div>Ernakulam - 682018, Kerala</div>
                                <div style={{ marginTop: 8, color: '#0FA958', fontSize: '0.85rem' }}>GSTIN: 32A5EF3470ZA1Z8</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div>© {new Date().getFullYear()} GreenVolt Energy Solutions LLP. All rights reserved.</div>
                <div>Designed with ⚡ for a greener future</div>
            </div>
        </footer>
    );
}
