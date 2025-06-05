import React from 'react';

interface CardButtonProps {
    isSelected?: boolean;
}

export const CardButton = ({ isSelected = false }: CardButtonProps) => (
    <div
        className={`
      w-full mt-3 py-3 px-6 rounded-md font-medium transition-colors duration-200
      ${isSelected ? 'text-white' : 'text-slate-700'}
    `}
    >
        {isSelected ? 'Selected' : 'Subscribe'}
    </div>
); 