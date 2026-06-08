import React from 'react';
import { UserPlus, PenLine, BarChart3, ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: '推しを登録する',
    description: 'アプリを開いて、あなたの推しを登録。名前、ジャンル、テーマカラーを設定するだけ。',
    color: 'from-oshi-pink-deep to-oshi-pink',
    bgColor: 'bg-oshi-pink-light',
  },
  {
    number: '02',
    icon: PenLine,
    title: '予定・グッズ・支出を記録する',
    description: 'ライブの予定、買ったグッズ、使った金額を記録していくだけ。写真もメモも追加できます。',
    color: 'from-oshi-lavender-deep to-oshi-lavender',
    bgColor: 'bg-oshi-lavender-light',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'カレンダーやグラフで推し活を見える化する',
    description: '記録した情報がカレンダーやグラフに。推し活の全体像がひとめで分かります。',
    color: 'from-oshi-mint to-oshi-lavender',
    bgColor: 'bg-oshi-mint-light',
  },
];

const HowToSection: React.FC = () => {
  return (
    <section id="howto" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            <span className="gradient-text">かんたん3ステップ</span>で<br className="sm:hidden" />
            はじめよう
          </h2>
          <p className="section-sub mb-14 max-w-lg mx-auto">
            推し活の記録は、とっても簡単です
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-oshi-pink via-oshi-lavender to-oshi-mint hidden sm:block" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <AnimateIn key={step.number} delay={index * 150} direction={isEven ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                      <span className={`text-5xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-30`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-oshi-navy mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-oshi-purple-light leading-relaxed max-w-sm mx-auto md:mx-0">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-soft`}>
                        <Icon size={28} className="text-oshi-navy" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* Arrow */}
          <div className="flex justify-center mt-10">
            <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center animate-bounce-soft">
              <ArrowRight size={24} className="text-oshi-pink-deep rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
