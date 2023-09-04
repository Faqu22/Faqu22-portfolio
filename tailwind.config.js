/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                '9/50': '18%',
            },
            backgroundColor: {
                'custom-color': 'rgba(14,0,61,255)',
            },
            backgroundImage: {
                main: "url('./src/assets/bg.jpg')",
            },
        },
    },
}
