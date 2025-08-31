
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    category: string;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category, className = "" }) => (
    <div className={`relative group overflow-hidden ${className}`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-brand-dark/50 transition-colors duration-300"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="font-oxanium text-2xl font-bold uppercase text-white">{title}</h3>
            <p className="font-inter text-brand-green">{category}</p>
        </div>
    </div>
);

const WorkSection: React.FC = () => {
    return (
        <section id="work" className="py-20 md:py-32 bg-brand-dark/95">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="font-iceland text-5xl md:text-7xl text-center uppercase mb-16 text-brand-green">Featured Projects</h2>
                </AnimatedElement>
                <AnimatedElement>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px]">
                        <ProjectCard imageUrl="https://picsum.photos/seed/project1/800/600" title="Project Nexus" category="Branding" className="md:col-span-2" />
                        <ProjectCard imageUrl="https://picsum.photos/seed/project2/600/800" title="Data Stream" category="UI/UX Design" />
                        <ProjectCard imageUrl="https://picsum.photos/seed/project3/600/800" title="Cyber Core" category="Digital Strategy" />
                        <ProjectCard imageUrl="https://picsum.photos/seed/project4/800/600" title="Future Vision" category="Branding" className="md:col-span-2" />
                    </div>
                </AnimatedElement>
            </div>
        </section>
    );
};

export default WorkSection;
