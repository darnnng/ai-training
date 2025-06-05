import { useState } from 'react';
import { PricingCard } from '../components/PricingCard';

export const Task1 = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Pro');

  const pricingPlans = [
    {
      plan: 'Standard',
      price: '100',
      features: [
        '50,000 Requests',
        '4 contributors',
        'Up to 3 GB storage space'
      ]
    },
    {
      plan: 'Pro',
      price: '200',
      features: [
        '100,000 Requests',
        '7 contributors',
        'Up to 6 GB storage space'
      ]
    },
    {
      plan: 'Expert',
      price: '500',
      features: [
        '200,000 Requests',
        '11 contributors',
        'Up to 10 GB storage space'
      ]
    }
  ];

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow py-16 px-4 flex flex-col">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Pricing</h1>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:space-x-0 space-y-6 sm:space-y-0 justify-center items-center flex-grow">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isSelected={selectedPlan === plan.plan}
              onSelect={() => setSelectedPlan(plan.plan)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 