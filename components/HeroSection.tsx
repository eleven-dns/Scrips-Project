
import React, { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';

const HeroSection: React.FC = () => {
    const headlineText = "Redefining Digital Landscapes.";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < headlineText.length) {
                setDisplayedText(headlineText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 80);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
             <div 
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#8FFF00 1px, transparent 1px), linear-gradient(to right, #8FFF00 1px, #1C1C1C 1px)',
                    backgroundSize: '40px 40px',
                }}
            ></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
            
            <div className="container mx-auto text-center relative z-20">
                <h1 className="font-iceland text-6xl md:text-8xl lg:text-9xl uppercase text-brand-green tracking-wider">
                    {displayedText}
                    <span className="animate-ping">_</span>
                </h1>
                <AnimatedElement>
                    <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto mt-6 text-white/80">
                        Scrips is a creative studio crafting next-generation brand identities, UX, and UI for ambitious businesses.
                    </p>
                </AnimatedElement>
                <AnimatedElement>
                    <a
                        href="#work"
                        className="inline-block mt-10 px-10 py-4 font-oxanium text-lg uppercase tracking-widest bg-brand-green text-brand-dark hover:bg-brand-pink transition-colors duration-300 transform hover:scale-105"
                    >
                        Explore Our Work
                    </a>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default HeroSection;
