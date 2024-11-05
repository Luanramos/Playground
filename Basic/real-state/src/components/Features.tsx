import React from 'react';
import { Shield, MapPin, DollarSign } from 'lucide-react';

export const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Giving you peace of mind</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-emerald-500" />}
            title="Extra security"
            description="We provide the best security systems for all our properties to ensure your safety."
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8 text-emerald-500" />}
            title="Strategic location"
            description="All our properties are located in prime areas with easy access to amenities."
          />
          <FeatureCard
            icon={<DollarSign className="w-8 h-8 text-emerald-500" />}
            title="Best price"
            description="We offer competitive prices and flexible payment options to suit your budget."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};