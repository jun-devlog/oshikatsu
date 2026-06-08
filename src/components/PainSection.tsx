import React from 'react';
import { pains } from '../data/pains';
import { AnimateIn } from './AnimateIn';

const PainSection: React.FC = () => {
  return (
    <section id="pain" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            推し活、楽しいけど<br className="sm:hidden" />
            <span className="gradient-text">管理が大変</span>じゃない？
          </h2>
          <p className="section-sub mb-12 max-w-lg mx-auto">
            楽しいはずの推し活、こんな悩みはありませんか？
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((pain, index) => (
            <AnimateIn key={pain.id} delay={index * 100}>
              <div className="card-base group cursor-default">
                <div className="flex items-start gap-3">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {pain.emoji}
                  </span>
                  <p className="text-sm md:text-base font-medium text-oshi-navy leading-relaxed pt-1">
                    {pain.text}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
