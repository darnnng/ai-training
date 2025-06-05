import React from 'react';
import { Card } from './ui/Card';
import { CardDivider } from './ui/CardDivider';
import { CardFeature } from './ui/CardFeature';
import { CardButton } from './ui/CardButton';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isSelected?: boolean;
  onSelect?: () => void;
}

export const PricingCard = ({
  plan,
  price,
  features,
  isSelected = false,
  onSelect
}: PricingCardProps) => {
  return (
    <Card isSelected={isSelected} onClick={onSelect}>
      <h2 className="text-xl font-medium mb-3">{plan}</h2>

      <div className="text-5xl font-bold mb-3">
        <span className="text-4xl align-top">$</span>
        {price}
      </div>

      <CardDivider isSelected={isSelected} />

      <div className="flex-grow flex flex-col justify-center">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <CardFeature>{feature}</CardFeature>
            {index < features.length - 1 && <CardDivider isSelected={isSelected} />}
          </React.Fragment>
        ))}
      </div>

      <CardButton isSelected={isSelected} />
    </Card>
  );
}; 