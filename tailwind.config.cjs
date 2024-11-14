/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                app: "#F5F5DC",
                // app: "#65d6f4",
                // app_bg: "#F5F5DC",
                app_bg: "#7A5C33",
                app_gray: "#b9b8c1",
            },
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            nominee: ["Nominee", "sans- serif"],
            redzone: ["Redzone", "sans- serif"],
        },
    },
    plugins: [
        {
            ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
    ],
};
