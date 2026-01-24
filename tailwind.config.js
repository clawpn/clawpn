/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js}"],
    theme: {
        extend: {
        colors: { primary: '#122C4F', accent: '#3B82F6' },
        fontFamily: {
            game: ['"Press Start 2P"', 'monospace'],
            sans: ['Inter', 'sans-serif']
        }
        },
    },
    plugins: [],
}