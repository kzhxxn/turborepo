// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./app/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        'gray-base': '#111111',
        'gray-hover': '#111111cc',
        'gray-pressed': '#111111cc',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
};

export default config;
