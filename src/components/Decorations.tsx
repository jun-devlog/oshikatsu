import React from 'react';

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
}

export const Sparkle: React.FC<SparkleProps> = ({ 
  className = '', 
  size = 16,
  color = '#E991A8',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={`animate-sparkle ${className}`}
  >
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

export const HeartDeco: React.FC<SparkleProps> = ({
  className = '',
  size = 20,
  color = '#F8C8D4',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={`animate-pulse-soft ${className}`}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const StarDeco: React.FC<SparkleProps> = ({
  className = '',
  size = 18,
  color = '#FFD966',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={`animate-sparkle-delay ${className}`}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface DecorativeElementsProps {
  variant?: 'hero' | 'section' | 'cta';
}

export const DecorativeElements: React.FC<DecorativeElementsProps> = ({ variant = 'section' }) => {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Sparkle className="absolute top-[10%] left-[8%]" size={20} color="#E991A8" />
        <Sparkle className="absolute top-[15%] right-[12%]" size={14} color="#9B7DD4" />
        <StarDeco className="absolute top-[25%] left-[15%]" size={22} color="#FFD966" />
        <HeartDeco className="absolute bottom-[30%] right-[8%]" size={24} color="#F8C8D4" />
        <Sparkle className="absolute bottom-[20%] left-[5%]" size={12} color="#B8EAE4" />
        <StarDeco className="absolute top-[40%] right-[20%]" size={16} color="#FFD966" />
        <HeartDeco className="absolute top-[60%] left-[20%]" size={16} color="#D4C5F0" />
        <Sparkle className="absolute bottom-[10%] right-[15%]" size={18} color="#E991A8" />
      </div>
    );
  }
  
  if (variant === 'cta') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Sparkle className="absolute top-[15%] left-[10%]" size={18} color="rgba(255,255,255,0.5)" />
        <StarDeco className="absolute top-[20%] right-[15%]" size={20} color="rgba(255,255,255,0.4)" />
        <HeartDeco className="absolute bottom-[25%] left-[20%]" size={22} color="rgba(255,255,255,0.3)" />
        <Sparkle className="absolute bottom-[15%] right-[10%]" size={14} color="rgba(255,255,255,0.5)" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <Sparkle className="absolute top-[5%] right-[8%]" size={14} color="#E991A8" />
      <StarDeco className="absolute top-[10%] left-[5%]" size={16} color="#FFD966" />
    </div>
  );
};
