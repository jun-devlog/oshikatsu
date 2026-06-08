import React from 'react';
import { features } from '../data/features';
import { AnimateIn } from './AnimateIn';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            <span className="gradient-text">6つの機能</span>で、<br className="sm:hidden" />
            推し活をサポート
          </h2>
          <p className="section-sub mb-12 max-w-lg mx-auto">
            推し活に必要な機能がすべて揃っています
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.id} delay={index * 100}>
                <div className="card-base h-full group">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={26} className={feature.color} />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-oshi-navy mb-2">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-oshi-purple-light leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {/* Detail tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {feature.details.map((detail, i) => (
                      <span
                        key={i}
                        className={`badge ${feature.bgColor} ${feature.color}`}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
