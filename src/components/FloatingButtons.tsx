'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
    return (
        <div className="floating-buttons">
            <a
                href="https://wa.me/918714889721?text=Hi%2C%20I%27m%20interested%20in%20solar%20installation"
                target="_blank"
                rel="noopener noreferrer"
                className="float-btn float-whatsapp"
                aria-label="Chat on WhatsApp"
                id="whatsapp-button"
            >
                <MessageCircle size={24} />
            </a>
            <a
                href="tel:+918714889721"
                className="float-btn float-phone animate-pulse-glow"
                aria-label="Call Now"
                id="call-button"
            >
                <Phone size={24} />
            </a>
        </div>
    );
}
