'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Calculator, Sun, IndianRupee, TrendingUp, Zap,
    ArrowRight, Leaf, Clock, PiggyBank
} from 'lucide-react';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

export default function SolarCalculatorPage() {
    const [bill, setBill] = useState(2000);
    const [showResult, setShowResult] = useState(false);

    // Calculation logic
    const avgUnitRate = 6.5; // ₹ per unit average in Kerala
    const unitsConsumed = Math.round(bill / avgUnitRate);
    const requiredKW = Math.max(1, Math.round((unitsConsumed / 120) * 10) / 10); // ~120 units per kW/month in Kerala
    const costPerKW = 55000; // Average cost per kW installed
    const totalCost = Math.round(requiredKW * costPerKW);

    // Subsidy calculation
    const getSubsidy = (kw: number) => {
        if (kw <= 2) return kw * 30000;
        if (kw <= 3) return 60000 + (kw - 2) * 18000;
        return 78000;
    };
    const subsidy = getSubsidy(requiredKW);
    const netCost = Math.max(0, totalCost - subsidy);

    const annualSaving = bill * 12;
    const monthlySaving = bill;
    const roiYears = Math.round((netCost / annualSaving) * 10) / 10;
    const savingsIn25Years = annualSaving * 25 - netCost;
    const co2Saved = Math.round(requiredKW * 1.5 * 100) / 100; // tonnes per year

    const handleCalculate = () => {
        setShowResult(true);
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-content">
                    <AnimatedSection>
                        <h1>Solar Calculator</h1>
                        <p>Find out how much you can save with solar energy based on your electricity bill</p>
                    </AnimatedSection>
                </div>
            </div>

            <section className="section">
                <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
                    <AnimatedSection>
                        <div className="calculator-card">
                            <div style={{ textAlign: 'center', marginBottom: 40 }}>
                                <div style={{
                                    width: 72, height: 72, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #0FA958, #0C8A46)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 16px', color: 'white'
                                }}>
                                    <Calculator size={32} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: 8 }}>Solar Savings Calculator</h2>
                                <p style={{ color: '#64748B' }}>
                                    Enter your monthly electricity bill to see your potential savings
                                </p>
                            </div>

                            {/* Bill Input */}
                            <div style={{ marginBottom: 32 }}>
                                <label className="form-label" style={{ fontSize: '1rem', marginBottom: 16, display: 'block' }}>
                                    Monthly Electricity Bill
                                </label>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 20,
                                    background: '#F4F7FA', borderRadius: 16, padding: '24px 32px'
                                }}>
                                    <IndianRupee size={24} color="#0FA958" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '2.5rem',
                                            fontWeight: 800,
                                            color: '#0FA958',
                                            lineHeight: 1
                                        }}>
                                            ₹{bill.toLocaleString()}
                                        </div>
                                        <input
                                            type="range"
                                            className="range-slider"
                                            min={500}
                                            max={50000}
                                            step={500}
                                            value={bill}
                                            onChange={(e) => {
                                                setBill(Number(e.target.value));
                                                setShowResult(false);
                                            }}
                                            style={{ marginTop: 16 }}
                                        />
                                        <div style={{
                                            display: 'flex', justifyContent: 'space-between',
                                            color: '#94A3B8', fontSize: '0.8rem', marginTop: 8
                                        }}>
                                            <span>₹500</span>
                                            <span>₹50,000</span>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: 8, textAlign: 'center' }}>
                                    Or type directly:
                                    <input
                                        type="number"
                                        value={bill}
                                        onChange={(e) => {
                                            setBill(Number(e.target.value));
                                            setShowResult(false);
                                        }}
                                        style={{
                                            width: 100, padding: '6px 12px', border: '1px solid #E2E8F0',
                                            borderRadius: 8, marginLeft: 8, fontSize: '0.9rem',
                                            fontFamily: 'Open Sans, sans-serif'
                                        }}
                                    />
                                </p>
                            </div>

                            <button
                                className="btn-primary"
                                onClick={handleCalculate}
                                style={{ width: '100%', justifyContent: 'center', padding: '18px 32px', fontSize: '1.1rem' }}
                            >
                                <Calculator size={20} /> Calculate Savings
                            </button>

                            {/* Results */}
                            {showResult && (
                                <div className="calculator-result" style={{ marginTop: 32 }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 24, textAlign: 'center', color: '#0FA958' }}>
                                        Your Solar Estimate
                                    </h3>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <Zap size={18} color="#0FA958" /> Monthly Consumption
                                        </span>
                                        <span className="result-value">{unitsConsumed} Units</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <Sun size={18} color="#0FA958" /> Required System Size
                                        </span>
                                        <span className="result-value">{requiredKW} kW</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <IndianRupee size={18} color="#0FA958" /> Estimated Total Cost
                                        </span>
                                        <span className="result-value">₹{totalCost.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item" style={{ background: 'rgba(15,169,88,0.08)', borderRadius: 8, padding: '12px 8px', margin: '8px -8px' }}>
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: '#0FA958' }}>
                                            <PiggyBank size={18} color="#0FA958" /> Government Subsidy
                                        </span>
                                        <span className="result-value" style={{ color: '#0FA958' }}>- ₹{subsidy.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item" style={{ borderBottom: '2px solid rgba(15,169,88,0.2)' }}>
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#0F172A' }}>
                                            <IndianRupee size={18} color="#0FA958" /> Net Cost (After Subsidy)
                                        </span>
                                        <span className="result-value" style={{ fontSize: '1.5rem' }}>₹{netCost.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <TrendingUp size={18} color="#0FA958" /> Monthly Savings
                                        </span>
                                        <span className="result-value">₹{monthlySaving.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <TrendingUp size={18} color="#0FA958" /> Annual Savings
                                        </span>
                                        <span className="result-value">₹{annualSaving.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <Clock size={18} color="#0FA958" /> ROI Period
                                        </span>
                                        <span className="result-value">{roiYears} Years</span>
                                    </div>

                                    <div className="result-item">
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <PiggyBank size={18} color="#0FA958" /> 25-Year Net Savings
                                        </span>
                                        <span className="result-value" style={{ color: '#0FA958' }}>₹{savingsIn25Years.toLocaleString()}</span>
                                    </div>

                                    <div className="result-item" style={{ borderBottom: 'none' }}>
                                        <span className="result-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <Leaf size={18} color="#0FA958" /> CO₂ Reduction (per year)
                                        </span>
                                        <span className="result-value">{co2Saved} Tonnes</span>
                                    </div>

                                    <div style={{ textAlign: 'center', marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(15,169,88,0.1)' }}>
                                        <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: 16 }}>
                                            * Estimates are approximate and may vary based on actual site conditions, tariff rates, and system performance.
                                        </p>
                                        <Link href="/contact" className="btn-primary">
                                            Get Exact Quote <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Info Cards */}
            <section className="section section-grey">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-badge">💡 Good to Know</div>
                            <h2 className="section-title">Solar Investment Facts</h2>
                        </div>
                    </AnimatedSection>

                    <div className="feature-grid">
                        {[
                            {
                                icon: <IndianRupee size={28} />,
                                title: 'Government Subsidy',
                                desc: 'Under PM Surya Ghar scheme, get ₹30,000/kW for up to 2 kW and an additional ₹18,000 for the 3rd kW, up to a maximum flat subsidy of ₹78,000.',
                            },
                            {
                                icon: <TrendingUp size={28} />,
                                title: '300% Returns',
                                desc: 'Solar panels generate electricity for 25+ years. After ROI in 3-5 years, it\'s pure savings of ₹15-25 Lakhs.',
                            },
                            {
                                icon: <Leaf size={28} />,
                                title: 'Go Green',
                                desc: 'A 5kW system prevents ~7.5 tonnes of CO₂ annually — equivalent to planting 300+ trees every year.',
                            },
                        ].map((item, i) => (
                            <AnimatedCard key={item.title} delay={i * 0.1}>
                                <div className="service-card">
                                    <div className="service-card-icon">{item.icon}</div>
                                    <h3 className="service-card-title">{item.title}</h3>
                                    <p className="service-card-desc">{item.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
