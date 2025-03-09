import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				detailsHeader: '0px 0px 31.3px 0px rgba(0, 0, 0, 0.15)',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				prata: ['Prata', 'sans-serif'],
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				background: '#16161C',
				foreground: '#EDEDED',
				elite: '#D1A564',
				circle: '#D6A374',
				detailsBackground: '#F5F5F5',
				detailsPointTitle: '#DBA878',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
				// Base dark background
				midnight: {
					DEFAULT: '#16161C',
					light: '#1C1C23',
				},
				// Primary accent - Purple/Blue
				aurora: {
					DEFAULT: '#7C5DFA',
					light: '#9277FF',
				},
				// Secondary colors
				frost: {
					DEFAULT: '#E4E7FF',
					dark: '#DFE3FA',
				},
				// Success/Positive
				emerald: {
					DEFAULT: '#33D69F',
					light: '#4AEDC4',
				},
				// Warning/Attention
				amber: {
					DEFAULT: '#FF8F00',
					light: '#FFA726',
				},
				// Text colors
				slate: {
					50: '#F8FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E1',
					400: '#94A3B8',
					500: '#64748B',
					600: '#475569',
					700: '#334155',
					800: '#1E293B',
					900: '#0F172A',
				},
			},
			backgroundImage: {
				socialHeader:
					'linear-gradient(90.02deg, #CEA46E 0%, #D5B286 40.02%, #AF936F 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
} satisfies Config
