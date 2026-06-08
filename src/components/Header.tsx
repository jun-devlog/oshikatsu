import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: '機能', href: '#features' },
    { label: '画面イメージ', href: '#screens' },
    { label: '使い方', href: '#howto' },
    { label: '料金', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-oshi-pink-deep to-oshi-lavender-deep flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-pink">
            <Heart size={18} className="text-white fill-white" />
          </div>
          <span className="text-lg font-black text-oshi-navy font-display">
            推しログ
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-oshi-purple hover:text-oshi-pink-deep transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-oshi-pink-deep after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onCTAClick}
            className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep text-white text-sm font-bold hover:shadow-pink hover:scale-105 transition-all duration-300 active:scale-95"
          >
            リリース通知を受け取る
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl text-oshi-navy hover:bg-oshi-pink-light transition-colors"
          aria-label="メニュー"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-oshi-lavender/30 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-oshi-purple hover:bg-oshi-pink-light hover:text-oshi-pink-deep transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onCTAClick();
            }}
            className="btn-primary w-full mt-3 text-center"
          >
            リリース通知を受け取る
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
