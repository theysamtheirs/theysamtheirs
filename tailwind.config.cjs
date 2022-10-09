/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		},
		extend: {
			fontFamily: {
				'brand': ['canada-type-gibson', 'sans-serif'],
				'sans': ['canada-type-gibson', 'sans-serif'],
			},
		},
	},
	plugins: ['@tailwindcss/typography'],
}
