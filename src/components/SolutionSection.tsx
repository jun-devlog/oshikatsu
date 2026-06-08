import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

interface SolutionSectionProps {
  onCTAClick: () => void;
}

const solutionPoints = [
  '推しごとに予定・グッズ・支出をまとめて管理',
  'カレンダー＋リマインドで大事な予定を逃さない',
  'グッズを写真つきでリスト化、ダブり買い防止',
  '支出をグラフで見える化、予算管理もラクラク',
  '遠征チェックリストで準備万端',
  'データはあなただけのもの、プライバシーも安心',
];

const SolutionSection: React.FC<SolutionSectionProps> = ({ onCTAClick }) => {
  return (
    <section id="solution" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-oshi-pink-light/30 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            推しログなら、推し活の情報を<br className="sm:hidden" />
            <span className="gradient-text">ぜんぶひとまとめ</span>
          </h2>
          <p className="section-sub mb-12 max-w-lg mx-auto">
            バラバラだった情報を1つのアプリにまとめて、<br className="hidden sm:block" />
            推し活をもっと楽しく、もっとスマートに。
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-4xl p-6 md:p-8 shadow-soft-lg border border-oshi-lavender/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-oshi-pink-deep to-oshi-lavender-deep flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-sm text-oshi-navy font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button onClick={onCTAClick} className="btn-primary">
                  推し活管理をはじめる
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default SolutionSection;
