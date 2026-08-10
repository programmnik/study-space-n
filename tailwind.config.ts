import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'var(--font-jakarta)', 'var(--font-manrope)', 'var(--font-nunito)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config;