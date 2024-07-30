/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        backgroundPosition: {
            "center-right": "center right",
            "center-left": "center left",
            "right-top": "right top",
            "right-bottom": "right bottom",
            right: "right",
            left: "left",
            top: "top",
            center: "center",
            bottom: "bottom",
            "bottom-left": "bottom left",
            "left-top": "left top",
        },
        fontFamily: {
            inter: ["sans-serif", "Inter"],
        },
        extend: {
            colors: {
                bgHeader: "rgba(0, 0, 0, 0.7)",
                textTitle: "rgba(20, 23, 28, 1)",
                colorMain: "rgba(254, 192, 15, 1)",
                blackMainApp: "#14171C",
                yellowMain: "#FEC00F",
                colorActive: '#F79F1F',
            },
            fontSize: {
                linkHeader: ["18px", "32px"],
                sizeDefault: ["16px", "32px"],
                sizeDefaultMobile: ["13px", "16px"],
                titleDefaultMobile: ["14px", "24px"],
            },
            gridTemplateColumns: {
                "3fr-7fr": "3fr 7fr",
                "7fr-3fr": "7fr 3fr",
            },
            animation: {
                fade: "fadeIn 1s ease-in-out",
            },
        },
        container: {
            padding: {
                DEFAULT: "15px",
            },
            screens: {
                "2xl": "1530px",
            },
        },
    },
    plugins: [],
};
