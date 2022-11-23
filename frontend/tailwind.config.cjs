/* eslint-disable global-require */

module.exports = {
    content: [`./index.html`, `./src/**/*.js`, `./src/**/*.jsx`],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: `1rem`,
                sm: `1rem`,
                lg: `2rem`,
                xl: `2rem`
            }
        },
        screens: {
            sm: `640px`,
            md: `768px`,
            lg: `1024px`,
            xl: `1280px`
        },
        fontFamily: {
            serif: [`minion-pro, serif`],
            sans: [`gill-sans-nova, sans-serif`],
            display:[`Fira Sans`, `sans-serif`]
        },
        extend: {
            colors: {
                "black-800": `#434343`,
                "purple-900": `#6C4AB6`,
                "purple-600": `#8D72E1`,
                "blue-600": `#8D9EFF`,
                "blue-200": `#B9E0FF`,
                "white-100": `#FFFFFF`,
                "lightest-gray": `#000000`,
                "light-gray": `#D8D8D8`,
                "medium-gray": `#B4B4B4`,
                "dark-gray": `#8E8E8E`,
                "custom-grey": `#C9C9C9`,
                "custom-disabled": `#6e7177`,
                "custom-gold": `#8A7252`,
                "custom-red": `#A40202`
            },
            backgroundImage: {
                "piwero-white-logo": `url('https://cvws.icloud-content.com/B/AdMOahgxfNutt_t52dG5IxFA_dzOAWPPq0DVhjzippeTF8mPjBn6AoKU/Piwero+white+rect.png?o=AhoWgzSngl6Q5qCBrhdOorIxzHKV-D1fvP2uGOlynULF&v=1&x=3&a=CAog_Koknms1zxvj2dWWGT2J6jIRITHVQ65SM6v8lW3zkd0SaxCbuqLZxjAYm5f-2sYwIgEAUgRA_dzOWgT6AoKUaiVbY298CQHnOMIuV4nBFj5fv9LhMM91MY4a3MdbM4iqRRcmmPXnciXyN3A2zBIwwPauCwUwaMxedlUQLSN0b15HWsoD4daKUOvjl-kS&e=1668248734&fl=&r=164582d8-0fee-494b-8a19-67c434ae920a-1&k=iDEGr_A3Tzd7xZwChnqiVw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=63&s=vious4_ImzgC80Ar42Dym-HG5y0&cd=i')`,
                "bg-gradient-50": `linear-gradient(to right, #ffffff 50%,#F7F7F7 50%)`
            },
            inset: {
                "50pct": `50%`,
                "25pct": `25%`,
                "5pct": `5%`,
                "navbar-offset": `99px`
            },
            width: {
                inherit: `inherit`
            },
            height: {"95pct": `95%`, "90pct": `90%`},
            fontSize: {
                xxs: [`0.6rem`, `1rem`]
            },
            padding: {
                "60-pct": `60%`,
                "100-pct": `100%`
            },
            rotate: {
                135: `135deg`
            },
            zIndex: {
                "-10": `-10`
            },
            brightness: {
                70: `.7`,
                60: `.6`
            }
        },
        boxShadow: {
            "inner-black": `inset 0 0 0 1px black`,
            "inner-red-500": `inset 0 0 0 1px #ef4444`
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
}
