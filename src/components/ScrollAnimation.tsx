import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'scroll-animation';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'scroll-animation',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce
  });

  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const animationClass = `${animation} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`.trim();

  return (
    <div ref={elementRef} className={animationClass}>
      {children}
    </div>
  );
};

export default ScrollAnimation;