import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
      w-full md:w-[154px] h-[48px] rounded-[12px]
      bg-gray-base text-white text-[16px] leading-[148%] tracking-[-0.02em] font-semibold
      hover:bg-gray-hover active:bg-gray-pressed
      transition-colors duration-150
      ${className}
    `}
    >
      {children}
    </button>
  );
};
