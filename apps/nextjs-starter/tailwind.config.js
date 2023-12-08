/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                btn: {
                    background: 'hsl(var(--btn-background))',
                    'background-hover': 'hsl(var(--btn-background-hover))',
                },
            },
        },
    },
    plugins: [],
}
