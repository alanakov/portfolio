export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                backgroundSecondary: 'var(--color-background-secondary)',
                red: 'var(--color-red)',
                blue: 'var(--color-blue)',
                regularText: 'var(--color-regular-text)',
                stroke: 'var(--color-stroke)',
                footer: 'var(--color-footer)'
            },
            fontFamily: {
                'fira-code': 'var(--font-fira-code)',
            }
        },
    },
    plugins: [],
} 