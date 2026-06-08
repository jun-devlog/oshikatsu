import React, { useState } from 'react';
import { X, Mail, Bell, ArrowRight } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-oshi-navy/40 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-4xl p-8 shadow-soft-lg animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-oshi-purple-light hover:bg-oshi-gray transition-colors"
          aria-label="閉じる"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-gradient-card flex items-center justify-center">
                <Bell className="text-oshi-pink-deep" size={28} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-oshi-navy text-center mb-2">
              リリース通知を受け取る
            </h3>
            <p className="text-sm text-oshi-purple-light text-center mb-6 leading-relaxed">
              メールアドレスを登録すると、<br />
              アプリのリリース情報をお届けします 🎉
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-oshi-lavender-deep"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-oshi-lavender bg-oshi-gray 
                             text-oshi-navy placeholder:text-oshi-lavender-deep/50
                             focus:border-oshi-lavender-deep focus:bg-white focus:outline-none
                             transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-center"
              >
                <span>登録する</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-xs text-oshi-purple-light/60 text-center mt-4">
              ※ リリース通知のみに使用します。スパムは送りません。
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-oshi-navy mb-2">
              登録ありがとうございます！
            </h3>
            <p className="text-sm text-oshi-purple-light">
              リリース時にお知らせをお届けします ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailModal;
