import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", width = 80, height = 80 }) => {
  return (
    <img
      src="/acla-logo-new.png"
      alt="ACLA Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
};

export default Logo;