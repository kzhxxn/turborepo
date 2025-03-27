import React from 'react';
import './styles.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  isLoading?: boolean; // ✅ 로딩 상태 prop
}

export const Button = ({
  children,
  className,
  onClick,
  isLoading = false,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`
      w-full md:w-[154px] h-[48px] rounded-[12px]
      bg-gray-base text-white text-[16px] leading-[148%] tracking-[-0.02em] font-semibold
      hover:bg-neutral-800 active:bg-neutral-800
      transition-colors duration-150
      ${className}
    `}
    >
      {children}
    </button>
  );
};
