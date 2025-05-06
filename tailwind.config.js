/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans Pro"', 'sans-serif'],
                code: ['"Source Code Pro"', 'monospace']
            },
        },
    },
    plugins: [],

};