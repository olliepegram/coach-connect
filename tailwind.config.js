/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#1577FF',

					secondary: '#192534',

					accent: '#00ffff',

					neutral: '#ff00ff',

					info: '#0000ff',

					success: '#00ff00',

					warning: '#00ff00',

					error: '#ff0000',
				},
			},
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
