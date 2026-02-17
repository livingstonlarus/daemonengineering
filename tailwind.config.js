/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: '0px',
                // Optional: specific sizes if needed, but 0px is the DE-004 standard
                sm: '0px',
                md: '0px',
                lg: '0px',
                xl: '0px',
                '2xl': '0px',
                '3xl': '0px',
                full: '9999px', // Keep full for circles (avatars)
            },
            colors: {
                // Structural (Adaptive)
                dashboard: {
                    matte: 'rgb(var(--bg-dashboard) / <alpha-value>)',
                    dim: 'rgb(var(--bg-dim) / <alpha-value>)',
                },
                din: {
                    border: 'rgb(var(--border-din) / <alpha-value>)',
                },
                content: {
                    main: 'rgb(var(--text-main) / <alpha-value>)',
                    dim: 'rgb(var(--text-dim) / <alpha-value>)',
                },
                // Backlights (Constant - High Saturation cuts through both modes)
                backlight: {
                    orange: '#FF5F00',
                    green: '#00D445',
                    blue: '#0057FF',
                }
            },
            fontFamily: {
                headline: ['Barlow Condensed', 'sans-serif'],
                label: ['Manrope', 'sans-serif'],
                readout: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'void-texture': 'repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(125,125,125,0.05) 19px, rgba(125,125,125,0.05) 20px)',
            }
        },
    },
    plugins: [],
}
