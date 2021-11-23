module.exports = {
    mode: "jit",
    purge: ["./src/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "0.5rem",
        },
        fontFamily: {
            gilroy: "Gilroy",
            apparel: "Apparel",
        },
        letterSpacing: {
            tightest: "-2px",
            tighter: "-1px",
            tight: "-0.5px",
            normal: "0px",
            wide: "0.5px",
            wider: "1px",
            widest: "2px",
        },
        extend: {
            backgroundColor: {
                "main-light": "#f7e7ce",
                "main-100": "#e8dcc3",
                "main-200": "#e2d2b7",
                "main-300": "#be6c42",
                "main-dark": "#713c25",
                "main-green": "#8a7442",
            },
            textColor: {
                "main-light": "#f7e7ce",
                "main-100": "#e8dcc3",
                "main-200": "#e2d2b7",
                "main-300": "#be6c42",
                "main-dark": "#713c25",
                "main-green": "#8a7442",
            },
            borderColor: {
                "b-main": "#be6c42",
            },
            fontSize: {
                "1nr": "17px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
