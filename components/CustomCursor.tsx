
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updatePosition);

        document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });


        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className="hidden lg:block fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
            }}
        >
            <div
                className={`w-3 h-3 rounded-full transition-all duration-200 ${isHovering ? 'bg-brand-pink/50' : 'bg-brand-green'}`}
            />
        </div>
    );
};

export default CustomCursor;
