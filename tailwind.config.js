/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',   // Asegúrate de incluir la ruta correcta
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',      // Incluye todas las rutas relevantes
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
