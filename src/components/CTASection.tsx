import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DecorativeElements } from './Decorations';
import { AnimateIn } from './AnimateIn';

interface CTASectionProps {
  onCTAClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onCTAClick }) => {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      <DecorativeElements variant="cta" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <AnimateIn>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4 text-shadow-soft">
            あなたの推し活を、<br />
            もっと楽しく管理しよう
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
            推しログは現在開発中です。<br />
            リリース通知に登録して、いちばん乗りで使い始めましょう ✨
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-oshi-purple font-bold text-base shadow-soft-lg hover:shadow-lavender hover:scale-105 transition-all duration-300 active:scale-95"
            >
              リリース通知を受け取る
              <ArrowRight size={18} />
            </button>
            <a
              href="#screens"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-base border-2 border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              画面イメージを見る
            </a>
          </div>
        </AnimateIn>

        {/* Social proof */}
        <AnimateIn delay={400}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['#fff', '#fff', '#fff', '#fff'].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm"
                >
                  {['🎤', '🎮', '🎭', '💜'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80">
              <span className="font-bold text-white">500+</span> 人が事前登録中
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default CTASection;
