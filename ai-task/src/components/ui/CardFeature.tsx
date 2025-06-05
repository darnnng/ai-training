import React from 'react';

interface CardFeatureProps {
    children: React.ReactNode;
}

export const CardFeature = ({ children }: CardFeatureProps) => (
    <div className="py-2">
        <span>{children}</span>
    </div>
); 