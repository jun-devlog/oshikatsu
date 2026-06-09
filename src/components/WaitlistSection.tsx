import React from 'react';
import { Mail, ArrowRight, Bell } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { Sparkle, StarDeco } from './Decorations';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqeobkeg';

const WaitlistSection: React.FC = () => {
  return (
    <section id="waitlist" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-oshi-pink-light via-white to-oshi-lavender-light" />

      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Sparkle className="absolute top-[12%] left-[6%]"   size={18} color="#E991A8" />
        <StarDeco  className="absolute top-[8%]  right-[8%]" size={20} color="#FFD966" />
        <Sparkle className="absolute bottom-[15%] right-[5%]" size={14} color="#9B7DD4" />
        <StarDeco  className="absolute bottom-[10%] left-[10%]" size={16} color="#B8EAE4" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 text-center">

        {/* Icon */}
        <AnimateIn>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-oshi-pink-deep to-oshi-lavender-deep flex items-center justify-center shadow-pink">
              <Bell size={28} className="text-white" />
            </div>
          </div>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={100}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-oshi-navy leading-tight mb-4">
            リリース通知を受け取る
          </h2>
          <p className="text-sm md:text-base text-oshi-purple-light leading-relaxed max-w-lg mx-auto mb-8">
            推し活の思い出・イベント・支出・感想を記録できるアプリを開発中です。
            リリース時にお知らせを受け取りたい方は、メールアドレスを登録してください。
          </p>
        </AnimateIn>

        {/* Formspree Form */}
        <AnimateIn delay={200}>
          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            {/* Hidden metadata */}
            <input type="hidden" name="source" value="oshikatsu-lp" />
            <input type="hidden" name="app"    value="oshikatsu" />

            {/* Email input */}
            <div className="relative flex-1">
              <label htmlFor="email" className="sr-only">メールアドレス</label>
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-oshi-lavender-deep pointer-events-none"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="メールアドレスを入力"
                required
                autoComplete="email"
                className="w-full pl-11 pr-4 py-4 rounded-2xl border-2 border-oshi-lavender bg-white
                           text-oshi-navy placeholder:text-oshi-lavender-deep/50 text-sm
                           focus:border-oshi-lavender-deep focus:outline-none focus:shadow-lavender
                           transition-all duration-200 shadow-soft"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary flex-shrink-0"
            >
              <span>リリース通知を受け取る</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </AnimateIn>

        {/* Privacy note */}
        <AnimateIn delay={300}>
          <p className="text-xs text-oshi-purple-light/60 mt-4">
            ※ メールアドレスはリリース通知のみに使用します。スパムは送りません。
          </p>
        </AnimateIn>

        {/* Social proof */}
        <AnimateIn delay={400}>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex -space-x-2">
              {['#E991A8', '#9B7DD4', '#62C9BD', '#FFD966'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white text-xs flex items-center justify-center"
                  style={{ background: c }}
                >
                  {['🎤', '🎮', '🎭', '💜'][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-oshi-purple-light">
              <span className="font-bold text-oshi-navy">500+</span> 人が登録済み
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
};

export default WaitlistSection;
