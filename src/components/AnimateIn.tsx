import React, { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const directionStyles: Record<string, string> = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
    fade: '',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${directionStyles[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
