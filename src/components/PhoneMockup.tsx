import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = '', scale = 1 }) => {
  return (
    <div 
      className={`relative flex-shrink-0 ${className}`}
      style={{ 
        width: `${240 * scale}px`,
        height: `${490 * scale}px`,
      }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 bg-oshi-navy rounded-[2.5rem] shadow-soft-lg p-[3px]">
        <div className="absolute inset-[3px] bg-white rounded-[2.3rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[26px] bg-oshi-navy rounded-b-2xl z-10" />
          {/* Screen Content */}
          <div className="w-full h-full overflow-hidden rounded-[2.3rem]">
            {children}
          </div>
        </div>
      </div>
      {/* Side button */}
      <div className="absolute -right-[2px] top-[25%] w-[3px] h-[35px] bg-oshi-navy/80 rounded-r-full" />
      <div className="absolute -left-[2px] top-[20%] w-[3px] h-[20px] bg-oshi-navy/80 rounded-l-full" />
      <div className="absolute -left-[2px] top-[30%] w-[3px] h-[35px] bg-oshi-navy/80 rounded-l-full" />
      <div className="absolute -left-[2px] top-[40%] w-[3px] h-[35px] bg-oshi-navy/80 rounded-l-full" />
    </div>
  );
};

export default PhoneMockup;
