/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"Fuzzy Bubbles": ["Fuzzy Bubbles", "cursive"],
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
