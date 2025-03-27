import React from 'react';

interface HeaderProps {
  name?: string;
  color?: string;
}

export const Header: React.FC<HeaderProps> = ({
  name = '강지훈',
  color = 'ui-text-white',
}) => {
  return (
    <section
      className={`h-[52px] ui-py-5 ui-px-5 flex items-center justify-center text-[15px] leading-[140%] tracking-[-0.02em] font-medium ${color}`}
    >
      {name}
    </section>
  );
};
