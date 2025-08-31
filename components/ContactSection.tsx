
import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedInIcon } from './Icons';
import AnimatedElement from './AnimatedElement';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-brand-dark">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h2 className="font-iceland text-5xl md:text-7xl text-center uppercase mb-16 text-brand-green">Start a Project</h2>
                </AnimatedElement>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <AnimatedElement>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" id="name" placeholder="YOUR NAME" className="w-full bg-transparent border-b-2 border-white/20 focus:border-brand-green py-3 text-white/90 font-oxanium uppercase tracking-wider outline-none transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" id="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b-2 border-white/20 focus:border-brand-green py-3 text-white/90 font-oxanium uppercase tracking-wider outline-none transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" placeholder="YOUR MESSAGE" rows={4} className="w-full bg-transparent border-b-2 border-white/20 focus:border-brand-green py-3 text-white/90 font-oxanium uppercase tracking-wider outline-none transition-colors duration-300 resize-none"></textarea>
                            </div>
                            <button type="submit" className="inline-block mt-4 px-10 py-4 font-oxanium text-lg uppercase tracking-widest bg-brand-green text-brand-dark hover:bg-brand-pink transition-colors duration-300 transform hover:scale-105">
                                Submit
                            </button>
                        </form>
                    </AnimatedElement>
                    <AnimatedElement>
                        <div className="space-y-8 text-white/80">
                             <p className="font-inter text-lg leading-relaxed">
                                Have a project in mind? Let's talk. We're always excited to hear about new ideas and collaborate on bringing future-forward visions to life. Reach out and let's create something extraordinary together.
                            </p>
                            <div>
                                <h3 className="font-oxanium text-xl uppercase text-brand-green mb-3">Connect with us</h3>
                                <div className="flex space-x-6">
                                    <a href="#" aria-label="Twitter" className="text-white/70 hover:text-brand-pink transition-colors duration-300"><TwitterIcon className="w-8 h-8"/></a>
                                    <a href="#" aria-label="Instagram" className="text-white/70 hover:text-brand-pink transition-colors duration-300"><InstagramIcon className="w-8 h-8"/></a>
                                    <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-brand-pink transition-colors duration-300"><LinkedInIcon className="w-8 h-8"/></a>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
