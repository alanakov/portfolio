export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#19191D",
                backgroundSecondary: "#1E1E21",
                red: "#F32F2F",
                blue: "#1B688D",
                regularText: "#ABB2BF",
                stroke: "#424242",
                footer: "#141417"
            },
            fontFamily: {
                'fira-code': ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}