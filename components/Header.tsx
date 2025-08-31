
import React from 'react';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'work', name: 'Work' },
    { id: 'contact', name: 'Contact' },
];

const ScripsLogo = () => (
    <div className="font-iceland text-4xl tracking-widest text-brand-green relative select-none">
        <span className="relative z-10">SCRIPS</span>
        <span className="absolute top-0 left-0 z-0 text-brand-pink translate-x-px translate-y-px opacity-80">SCRIPS</span>
    </div>
);


const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 md:px-8 backdrop-blur-sm bg-brand-dark/50 border-b border-brand-green/10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" aria-label="Go to top">
                    <ScripsLogo />
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`font-oxanium uppercase tracking-wider transition-colors duration-300 ${
                                activeSection === link.id
                                    ? 'text-brand-green'
                                    : 'text-white/80 hover:text-brand-pink'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
