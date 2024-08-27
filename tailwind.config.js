/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: {
					DEFAULT: '#808080',
					100: '#d7d7d7',
					200: '#a7a7a7',
					300: '#626262',
					400: '#959595',
				},
				gold: '#CCB07C',
				logoutRed: '#EB4040',
			},
			fontFamily: {
				coveredBYG: ['Covered By Your Grace', 'cursive'],
			},
		},
	},
	plugins: [],
};
