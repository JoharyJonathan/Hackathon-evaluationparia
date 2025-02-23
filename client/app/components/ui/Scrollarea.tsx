import React from 'react';

interface ScrollAreaProps {
    className?: string;
    children: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ className, children }) => {
    return (
        <div className={`scroll-area ${className}`}>
            {children}
        </div>
    );
};

export default ScrollArea;

