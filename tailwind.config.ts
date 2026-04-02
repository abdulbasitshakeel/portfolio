import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#333366',
        'accent-light': '#E8E8F5',
        'bg-primary': '#F5F6FA',
        'text-primary': '#1F1F2E',
        'text-secondary': '#5C5C80',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #333366, #6666CC)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
