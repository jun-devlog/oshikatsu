import React from 'react';
import { Shield, CloudUpload, Lock, Share2 } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const trustItems = [
  {
    icon: Lock,
    title: 'データは自分だけが見られる',
    description: '記録した情報は自分だけのもの。他のユーザーには公開されません。',
    color: 'text-oshi-pink-deep',
    bgColor: 'bg-oshi-pink-light',
  },
  {
    icon: CloudUpload,
    title: 'バックアップ対応予定',
    description: '大切なデータを安全にバックアップ。端末を変えても安心です。',
    color: 'text-oshi-lavender-deep',
    bgColor: 'bg-oshi-lavender-light',
  },
  {
    icon: Shield,
    title: '推し活費の記録はプライベート',
    description: '支出の記録は完全プライベート。誰にも見られることはありません。',
    color: 'text-oshi-mint',
    bgColor: 'bg-oshi-mint-light',
  },
  {
    icon: Share2,
    title: 'SNS共有は任意',
    description: '共有したいときだけ。自動で投稿されることはありません。',
    color: 'text-oshi-cream-deep',
    bgColor: 'bg-oshi-cream',
  },
];

const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            <span className="gradient-text">安心</span>して使えます
          </h2>
          <p className="section-sub mb-12 max-w-lg mx-auto">
            あなたのプライバシーを大切にします
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateIn key={index} delay={index * 100}>
                <div className="card-base text-center group">
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className={item.color} />
                  </div>
                  <h3 className="text-base font-bold text-oshi-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-oshi-purple-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
