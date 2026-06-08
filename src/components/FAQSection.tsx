import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';
import { AnimateIn } from './AnimateIn';

const FAQItem: React.FC<{ faq: typeof faqs[0] }> = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-oshi-lavender/20 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <div className="flex items-start gap-3 pr-4">
          <span className="badge bg-oshi-pink-light text-oshi-pink-deep flex-shrink-0 mt-0.5">Q</span>
          <span className="text-sm md:text-base font-semibold text-oshi-navy group-hover:text-oshi-pink-deep transition-colors duration-200">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          size={20}
          className={`text-oshi-purple-light flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-start gap-3 pl-0">
          <span className="badge bg-oshi-lavender-light text-oshi-lavender-deep flex-shrink-0">A</span>
          <p className="text-sm text-oshi-purple-light leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-oshi-gray/30">
      <div className="max-w-2xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            よくある<span className="gradient-text">質問</span>
          </h2>
          <p className="section-sub mb-12">
            気になることがあれば、こちらをチェック
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="bg-white rounded-4xl p-6 md:p-8 shadow-soft">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default FAQSection;
