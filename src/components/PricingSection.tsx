import React from 'react';
import { Check, Crown, Sparkles } from 'lucide-react';
import { planFeatures, pricing } from '../data/pricing';
import { AnimateIn } from './AnimateIn';

interface PricingSectionProps {
  onCTAClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onCTAClick }) => {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-oshi-gray/50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            <span className="gradient-text">料金プラン</span>
          </h2>
          <p className="section-sub mb-12 max-w-lg mx-auto">
            無料プランでも推し活管理をはじめられます
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="card-base border-2 border-oshi-lavender/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-oshi-lavender" />
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Sparkles size={20} className="text-oshi-lavender-deep" />
                  <h3 className="text-xl font-bold text-oshi-navy">無料プラン</h3>
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-oshi-navy">¥0</span>
                  <span className="text-sm text-oshi-purple-light pb-1">/月</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {planFeatures
                  .filter((f) => f.free)
                  .map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-oshi-lavender-light flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-oshi-lavender-deep" />
                      </div>
                      <span className="text-sm text-oshi-navy">{feature.text}</span>
                    </div>
                  ))}
              </div>

              <button onClick={onCTAClick} className="btn-secondary w-full">
                無料ではじめる
              </button>
            </div>

            {/* Premium Plan */}
            <div className="card-base border-2 border-oshi-pink-deep/30 relative overflow-hidden shadow-soft-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep" />
              
              {/* Popular badge */}
              <div className="absolute -top-0 -right-0">
                <div className="bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl">
                  おすすめ ✨
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Crown size={20} className="text-oshi-pink-deep" />
                  <h3 className="text-xl font-bold text-oshi-navy">プレミアムプラン</h3>
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black gradient-text">¥{pricing.monthly.toLocaleString()}</span>
                  <span className="text-sm text-oshi-purple-light pb-1">/月</span>
                </div>
                <p className="text-xs text-oshi-purple-light mt-1">
                  年額プラン ¥{pricing.yearly.toLocaleString()}/年 <span className="text-oshi-pink-deep font-semibold">(2ヶ月分お得)</span>
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {planFeatures
                  .filter((f) => f.premium)
                  .map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-oshi-pink-light flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-oshi-pink-deep" />
                      </div>
                      <span className="text-sm text-oshi-navy font-medium">{feature.text}</span>
                    </div>
                  ))}
              </div>

              <button onClick={onCTAClick} className="btn-primary w-full">
                リリース通知を受け取る
              </button>
            </div>
          </div>
        </AnimateIn>

        {/* Comparison note */}
        <AnimateIn delay={300}>
          <div className="mt-8 text-center">
            <p className="text-xs text-oshi-purple-light">
              ※ 価格は予定です。リリース時に変更になる場合があります。
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default PricingSection;
