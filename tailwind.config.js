/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./app/(auth)/_layout.tsx',
		'./app/(auth)/sign-up.tsx',
		'./app/(auth)/sign-in.tsx',
		'./components/FormTextInput.tsx',
		'./components/CustomButton.tsx',
		'./components/index.ts',
	],
	theme: {
		extend: {
			colors: {
				gray: {
					DEFAULT: '#808080',
					100: '#d7d7d7',
					200: '#a7a7a7',
					300: '#4a4a4a',
					400: '#626262',
					500: '#959595',
				},
				gold: '#CCB07C',
				logoutRed: '#EB4040',
				lightText: '#dfdfdf',
			},
			fontFamily: {
				coveredBYG: ['Covered By Your Grace', 'cursive'],
			},
			backgroundImage: {
				lightBg: 'url("./assets/images/white-background.png")',
				darkBg: 'url("./assets/images/dark-background.png")',
			},
		},
	},
	plugins: [],
};
