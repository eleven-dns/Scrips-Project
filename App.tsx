
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';

const sections = ['home', 'services', 'work', 'contact'];

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
        
        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="bg-brand-dark font-inter text-white/80 overflow-x-hidden">
            <CustomCursor />
            <Header activeSection={activeSection} />
            <main>
                <HeroSection />
                <ServicesSection />
                <WorkSection />
                <ContactSection />
            </main>
        </div>
    );
};

export default App;
