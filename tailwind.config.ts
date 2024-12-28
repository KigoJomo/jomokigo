import type { Config } from 'tailwindcss'
import motion from 'tailwindcss-motion'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    '@/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'custom-gray': 'var(--custom-gray)',
      },
    },
  },
  plugins: [motion],
} satisfies Config
