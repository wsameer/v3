/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			gridColumnEnd: {
				n1: '-1'
			},
			gridRowEnd: {
				n1: '-1'
			}
		},
		boxShadow: {
			'7xl': '0 0 6px 3px rgb(30 30 31 / 59%)',
			'8xl': '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)',
			none: 'none'
		}
	},
	plugins: [],
}
