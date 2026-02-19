import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gold: {
					50: "#fff9e6",
					200: "#fde68a",
					400: "#fbbf24",
					500: "#f59e0b",
					700: "#b45309",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
