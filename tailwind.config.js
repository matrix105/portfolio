module.exports = {
	theme: {
		fontFamily: {
			mono: ['"Roboto Mono"']
		},
		extend: {
			screens: {
				'xs': '320px',
				'xm': '580px'
			},
			colors: {
				'gray0': '#25262A',
				'gray1': '#2D2E32',
				'gray2': '#90939A',
				'green-lighter': '#67F3AA',
				// Heroic/fantastic accent colors
				'purple-glow': '#A855F7',
				'cyber-blue': '#3B82F6',
				'gold-accent': '#F59E0B',
				'hero-gradient-start': '#1a1b1e',
				'hero-gradient-end': '#2d3748'
			},
			borderWidth: {
				'1': '1px',
				'2': '2px'
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
				'glow': '0 0 20px rgba(103, 243, 170, 0.4)',
				'glow-lg': '0 0 40px rgba(103, 243, 170, 0.3)',
				'purple-glow': '0 0 30px rgba(168, 85, 247, 0.3)',
			},
			maxWidth: {
				'vs': '124px'
			},
			fontSize: {
				'tiny': '.65rem',
				'8xl': '130px'
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			}
		},
		variants: {
			zIndex: ['responsive', 'hover', 'focus'],
			backgroundColor: ['responsive', 'hover', 'focus'],
			borderWidth: ['responsive', 'hover'],
			textColor: ['responsive', 'hover', 'focus', 'group-hover'],
			opacity: ['responsive', 'hover', 'focus', 'group-hover'],
		}
	}
};
