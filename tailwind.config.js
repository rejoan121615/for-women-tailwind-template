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
            "app-bold": "AppDisBold",
            "app-black": "AppDisBlack",
            "app-reg": "AppDisRegular",
            "app-light": "AppDisLight",
            "app-thin": "AppDisThin",
            "gil-bold": "GilroyBold",
            "gil-reg": "GilroyRegular",
            "gil-light": "GilroyLight",
            "gil-medium": "GilroyMedium",
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
                "header-bg": "#E5D8BE",
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
            screens: {
                mxl: "1750px",
            },
            borderRadius: {
                "30r": "30px",
            },
            fontSize: {
                brand: "28px",
            },
            transformOrigin: {
                "center-bottom": "center bottom",
            },
            fontSize: {
                "4rem": "4rem",
                "5rem": "5rem",
                "7rem": "7rem",
                "8rem": "8rem",
                "9rem": "9rem",
                "10rem": "10rem",
            },
            lineHeight: {
                "4rem": "4rem",
                "5rem": "5rem",
                "7rem": "7rem",
                "8rem": "8rem",
                "9rem": "9rem",
                "10rem": "10rem",
            },
            gridTemplateRows: {
                "main-rows": "minmax(0, 1fr) 0.6fr 0.5fr",
                "xs-main-rows": "repeat(2, minmax(0, 1fr)) 0.5fr",
            },
            screens: {
                xs: "425px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
