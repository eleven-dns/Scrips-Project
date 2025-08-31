
import React from 'react';
import { UiUxIcon, BrandIcon, StrategyIcon } from './Icons';
import AnimatedElement from './AnimatedElement';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-black/20 p-8 border border-white/10 group transition-all duration-300 hover:border-brand-pink hover:shadow-[0_0_20px_rgba(255,0,143,0.5)]">
        <div className="text-brand-green mb-6 w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-pink group-hover:animate-glitch-hover">
            {icon}
        </div>
        <h3 className="font-oxanium text-2xl font-bold mb-3 uppercase text-white/90">{title}</h3>
        <p className="font-inter text-white/70 leading-relaxed">{description}</p>
    </div>
);

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="font-iceland text-5xl md:text-7xl text-center uppercase mb-16 text-brand-green">Our Expertise</h2>
                </AnimatedElement>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatedElement>
                        <ServiceCard
                            icon={<UiUxIcon />}
                            title="UI/UX Design"
                            description="Crafting intuitive and engaging user experiences that are both beautiful and functional, driving user adoption and satisfaction."
                        />
                    </AnimatedElement>
                     <AnimatedElement>
                        <ServiceCard
                            icon={<BrandIcon />}
                            title="Brand Identity"
                            description="Building bold, futuristic brand identities that resonate with target audiences and create a lasting, memorable impression."
                        />
                    </AnimatedElement>
                    <AnimatedElement>
                         <ServiceCard
                            icon={<StrategyIcon />}
                            title="Digital Strategy"
                            description="Developing data-driven digital strategies that align with your business goals, ensuring a powerful and cohesive online presence."
                        />
                    </AnimatedElement>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
