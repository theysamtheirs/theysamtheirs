/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
        container: {
            center: true,
            padding: "1.4rem",
        },
		fontFamily: {
		},
		extend: {
			fontFamily: {
				'brand': ['gelica', 'sans-serif'],
				'sans': ['owners-text', 'sans-serif'],
			},
            boxShadow: {
                'solid': '1rem 1rem black',
            }
		},
	},
	plugins: ['@tailwindcss/typography'],
}
