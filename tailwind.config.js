/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oshi-pink':       '#F8C8D4',
        'oshi-pink-light': '#FDE8EE',
        'oshi-pink-deep':  '#E991A8',
        'oshi-lavender':   '#D4C5F0',
        'oshi-lavender-light': '#EDE6FB',
        'oshi-lavender-deep':  '#9B7DD4',
        'oshi-mint':       '#B8EAE4',
        'oshi-mint-light': '#E0F7F5',
        'oshi-cream':      '#FFF3C0',
        'oshi-cream-deep': '#FFD966',
        'oshi-navy':       '#2A1F5E',
        'oshi-purple':     '#5A3E8C',
        'oshi-purple-light': '#7B5EA7',
        'oshi-gray':       '#F5F0FA',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"M PLUS Rounded 1c"', 'sans-serif'],
        display: ['"M PLUS Rounded 1c"', '"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #FDE8EE 0%, #EDE6FB 50%, #E0F7F5 100%)',
        'gradient-section': 'linear-gradient(180deg, #ffffff 0%, #FDE8EE 100%)',
        'gradient-cta':     'linear-gradient(135deg, #E991A8 0%, #9B7DD4 100%)',
        'gradient-card':    'linear-gradient(135deg, #FDE8EE 0%, #EDE6FB 100%)',
        'gradient-premium': 'linear-gradient(135deg, #9B7DD4 0%, #E991A8 100%)',
      },
      boxShadow: {
        'soft':       '0 4px 24px rgba(154, 100, 200, 0.12)',
        'soft-lg':    '0 8px 40px rgba(154, 100, 200, 0.18)',
        'pink':       '0 4px 20px rgba(233, 145, 168, 0.35)',
        'lavender':   '0 4px 20px rgba(155, 125, 212, 0.35)',
        'card':       '0 2px 16px rgba(90, 62, 140, 0.08)',
        'card-hover': '0 8px 32px rgba(90, 62, 140, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out 2s infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'sparkle':      'sparkle 2s ease-in-out infinite',
        'sparkle-delay':'sparkle 2s ease-in-out 1s infinite',
        'pulse-soft':   'pulse-soft 3s ease-in-out infinite',
        'slide-up':     'slide-up 0.6s ease-out forwards',
        'fade-in':      'fade-in 0.8s ease-out forwards',
        'bounce-soft':  'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%':      { opacity: '0.6', transform: 'scale(1.2) rotate(180deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
