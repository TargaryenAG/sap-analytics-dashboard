import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sapBlue: '#0070f3',
        sapGray: '#32363a',
        sapDark: '#1a1a2e',
        sapDarkAlt: '#16213e',
        sapAccent: '#0f3460',
        sapSurface: '#0e0e1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
