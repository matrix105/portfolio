/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
        display: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      },
      screens: {
        'xs': '320px',
        'xm': '580px',
      },
      colors: {
        'gray0': '#0d0e10',
        'gray1': '#16181c',
        'gray2': '#90939A',
        'gray3': '#1f2228',
        'green-lighter': '#67F3AA',
        'purple-glow': '#A855F7',
        'cyber-blue': '#3B82F6',
        'gold-accent': '#F59E0B',
        'hero-gradient-start': '#0d0e10',
        'hero-gradient-end': '#16181c',
        'terminal-bg': '#0a0b0d',
        'terminal-border': '#2a2d35',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
        'glow': '0 0 20px rgba(103, 243, 170, 0.4)',
        'glow-lg': '0 0 40px rgba(103, 243, 170, 0.3)',
        'glow-soft': '0 0 12px rgba(103, 243, 170, 0.18)',
        'purple-glow': '0 0 30px rgba(168, 85, 247, 0.3)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.25)',
        'card': '0 1px 0 0 rgba(255, 255, 255, 0.04) inset, 0 8px 32px -8px rgba(0, 0, 0, 0.5)',
      },
      maxWidth: {
        'vs': '124px',
      },
      fontSize: {
        'tiny': '.65rem',
        '8xl': '130px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'grid-fade': 'grid-fade 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at top, rgba(103, 243, 170, 0.08), transparent 60%)',
        'radial-purple': 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.10), transparent 60%)',
      },
      backgroundSize: {
        'grid': '24px 24px',
        'grid-lg': '40px 40px',
      },
    },
  },
  plugins: [],
};
