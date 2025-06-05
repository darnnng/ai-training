import React from 'react';

interface CardProps {
    children: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Card = ({
    children,
    isSelected = false,
    onClick,
    className = ''
}: CardProps) => {
    return (
        <div
            onClick={onClick}
            className={`
        relative flex flex-col p-8 rounded-lg transition-all duration-300 cursor-pointer text-center
        ${isSelected
                    ? 'bg-slate-700 text-white scale-110 shadow-2xl z-10'
                    : 'bg-white text-slate-800 hover:scale-105 hover:shadow-lg hover:z-[5]'
                }
        focus-within:ring-2 focus-within:ring-blue-500
        sm:w-[300px] w-full
        ${className}
      `}
        >
            {children}
        </div>
    );
}; 