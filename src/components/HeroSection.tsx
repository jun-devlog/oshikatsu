import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import { DecorativeElements } from './Decorations';

interface HeroSectionProps {
  onCTAClick: () => void;
}

/* ── ダミーのホーム画面UI（モックアップ内部） ── */
const HomeScreenMock: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #FDE8EE 0%, #fff 40%)' }}>
    {/* Status bar placeholder */}
    <div className="pt-8 px-4 pb-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-oshi-navy">推しログ</span>
        <div className="w-4 h-4 rounded-full bg-oshi-pink-deep/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-oshi-pink-deep" />
        </div>
      </div>
    </div>
    {/* Greeting */}
    <div className="px-4 pb-3">
      <p className="text-[9px] text-oshi-purple-light">こんにちは 👋</p>
      <p className="text-[12px] font-bold text-oshi-navy mt-0.5">今日の推し活</p>
    </div>
    {/* Countdown card */}
    <div className="mx-3 rounded-2xl bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep p-3 text-white mb-3">
      <p className="text-[8px] opacity-80">次のイベントまで</p>
      <div className="flex items-end gap-1 mt-1">
        <span className="text-[22px] font-black leading-none">12</span>
        <span className="text-[9px] pb-0.5">日</span>
        <span className="text-[22px] font-black leading-none ml-1">5</span>
        <span className="text-[9px] pb-0.5">時間</span>
      </div>
      <p className="text-[8px] mt-1 opacity-90">🎤 ライブツアー 2025</p>
    </div>
    {/* Quick stats */}
    <div className="px-3 grid grid-cols-2 gap-2 mb-3">
      <div className="bg-white rounded-xl p-2.5 shadow-sm">
        <p className="text-[7px] text-oshi-purple-light">今月の支出</p>
        <p className="text-[13px] font-bold text-oshi-navy">¥12,500</p>
        <div className="w-full h-1 bg-oshi-gray rounded-full mt-1">
          <div className="w-[60%] h-full bg-oshi-pink-deep rounded-full" />
        </div>
      </div>
      <div className="bg-white rounded-xl p-2.5 shadow-sm">
        <p className="text-[7px] text-oshi-purple-light">グッズ</p>
        <p className="text-[13px] font-bold text-oshi-navy">24<span className="text-[9px] text-oshi-purple-light ml-0.5">件</span></p>
        <div className="flex gap-0.5 mt-1">
          {['#F8C8D4', '#D4C5F0', '#B8EAE4', '#FFF3C0'].map((c, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
    {/* Event list */}
    <div className="px-3">
      <p className="text-[9px] font-bold text-oshi-navy mb-1.5">今週の予定</p>
      {[
        { day: '月', title: 'チケット申込締切', color: '#E991A8' },
        { day: '水', title: '配信ライブ', color: '#9B7DD4' },
        { day: '土', title: 'グッズ発売日', color: '#62C9BD' },
      ].map((e, i) => (
        <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-2.5 py-2 mb-1.5 shadow-sm">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[8px] font-bold text-white" style={{ background: e.color }}>
            {e.day}
          </div>
          <span className="text-[9px] font-medium text-oshi-navy">{e.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20">
      <DecorativeElements variant="hero" />
      
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left pt-4 lg:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-oshi-lavender/30 shadow-soft mb-6 animate-fade-in">
              <Sparkles size={14} className="text-oshi-cream-deep" />
              <span className="text-xs font-semibold text-oshi-purple">
                推し活管理アプリ — Coming Soon
              </span>
            </div>

            {/* App name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-oshi-navy leading-tight mb-4 animate-slide-up">
              推し活を、<br />
              もっと楽しく。<br />
              <span className="gradient-text">もっとスマートに。</span>
            </h1>

            <p className="text-sm md:text-base text-oshi-purple-light leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              ライブ予定、グッズ管理、支出の見える化、遠征準備まで。<br />
              推し活に必要なことを、ぜんぶ「推しログ」でひとまとめ。
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '400ms' }}>
              <button onClick={onCTAClick} className="btn-primary">
                リリース通知を受け取る
                <ArrowRight size={18} />
              </button>
              <a href="#screens" className="btn-secondary">
                画面イメージを見る
              </a>
            </div>

            {/* Social proof hint */}
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="flex -space-x-2">
                {['#E991A8', '#9B7DD4', '#62C9BD', '#FFD966'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                    style={{ background: color }}
                  >
                    {['🎤', '🎮', '🎭', '💜'][i]}
                  </div>
                ))}
              </div>
              <p className="text-xs text-oshi-purple-light">
                <span className="font-bold text-oshi-navy">500+</span> 人が事前登録中
              </p>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-shrink-0 animate-float relative">
            <PhoneMockup scale={1.1}>
              <HomeScreenMock />
            </PhoneMockup>
            
            {/* Floating mini cards */}
            <div className="absolute -left-12 top-[20%] bg-white rounded-2xl px-3 py-2 shadow-soft animate-float-delay hidden sm:flex items-center gap-2">
              <span className="text-lg">🎤</span>
              <div>
                <p className="text-[9px] font-bold text-oshi-navy">ライブまで</p>
                <p className="text-[11px] font-black text-oshi-pink-deep">12日</p>
              </div>
            </div>
            <div className="absolute -right-10 top-[60%] bg-white rounded-2xl px-3 py-2 shadow-soft animate-float-slow hidden sm:flex items-center gap-2">
              <span className="text-lg">💰</span>
              <div>
                <p className="text-[9px] font-bold text-oshi-navy">今月の支出</p>
                <p className="text-[11px] font-black text-oshi-lavender-deep">¥12,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.8C384 29 480 34 576 41.7C672 49.3 768 59.7 864 58.3C960 57 1056 44 1152 38.3C1248 32.7 1344 34.3 1392 35.2L1440 36V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
