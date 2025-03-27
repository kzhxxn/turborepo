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
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
};

export default config;
