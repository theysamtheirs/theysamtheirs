/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		},
		extend: {
			fontFamily: {
				'brand': ['gastromond', 'sans-serif'],
				'sans': ['articulat-cf', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
