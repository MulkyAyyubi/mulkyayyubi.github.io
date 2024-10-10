import { transformer } from 'astro/zod';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				rotate : {
					
				},
				scroll: {
					"100%": {
						transform: "translate(calc(-50% - var(--gap) / 2))"
					}
				},
			},
			animation: {
				scroll: "scroll var(--duration, 20s) linear var(--direction, forwards) infinite"
			}
		},
	},
	plugins: [],
}
