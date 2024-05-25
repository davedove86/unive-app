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
				darkPurple: '#021442',
				red: '#ee3637',
				darkGrey: '#9592a6',
				lightGrey: '#f0eff5',
			},
		},
	},
	plugins: []
}
