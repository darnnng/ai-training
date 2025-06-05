import React from 'react';

interface CardDividerProps {
    isSelected?: boolean;
}

export const CardDivider = ({ isSelected = false }: CardDividerProps) => (
    <div className={`
    relative my-2
    ${isSelected
            ? '-mx-8 border-t border-white opacity-20'
            : 'w-4/5 mx-auto border-t border-gray-200'
        }
  `} />
); 