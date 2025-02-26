import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add the green gradient colors
        'citadel-green': {
          light: '#1a4d40',
          DEFAULT: '#173d33',
          dark: '#0f2822'
        },
        'citadel-beige': {
          light: '#e8d9bc',
          DEFAULT: '#d9c9a9',
          dark: '#c3b595'
        }
      },
      backgroundColor: {
        'app-bg': 'var(--app-bg)',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #173d33 0%, #0f2822 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        citadel: {
          "primary": "#173d33",
          "secondary": "#d9c9a9",
          "accent": "#1a4d40",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "dark",
    ],
  },
};
export default config;