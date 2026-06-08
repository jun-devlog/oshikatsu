import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-oshi-navy text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-oshi-pink-deep to-oshi-lavender-deep flex items-center justify-center">
              <Heart size={16} className="text-white fill-white" />
            </div>
            <span className="text-base font-bold text-white font-display">推しログ</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors duration-200">機能</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">料金</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
            <a href="#" className="hover:text-white transition-colors duration-200">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors duration-200">利用規約</a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © 2025 推しログ. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-oshi-pink-deep fill-oshi-pink-deep" /> for 推し活
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
