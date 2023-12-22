/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"primary-color": "#13111C",
				"secondary-color": "#A21AE6",
				"yellowColor": "#F4BA45",
			},
			colors: {
				"primary-color": "#BF93EC",
				"secondary-color": "#f4a949",
				"yellowColor": "#F4BA45",
			},
		},
	},
	plugins: [],
};
