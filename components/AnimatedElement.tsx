
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
    className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className || ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default AnimatedElement;
