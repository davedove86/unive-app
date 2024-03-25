/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				purple: '#333269',
				'dark-purple': '#021442',
				red: '#ee3637',
				'dark-grey': '#9592a6',
				'light-grey': '#f0eff5',
			},
		},
	},
	plugins: [],
};
