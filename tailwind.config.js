/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Formé Color Palette
        sand: '#F5F0E1',
        lavender: '#DCD0FF',
        sage: '#B0C9AE',
        // Extended palette for different states
        'sand-light': '#F8F5EE',
        'sand-dark': '#EDE6D4',
        'lavender-light': '#E8DFFF',
        'lavender-dark': '#C8B5FF',
        'sage-light': '#C4D4C2',
        'sage-dark': '#9BB89A',
      },
      fontFamily: {
        sans: ['Inter', 'Work Sans', 'Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'forme': '12px',
        'forme-lg': '16px',
        'forme-pill': '50px',
      },
      lineHeight: {
        'generous': '1.5',
        'extra-generous': '1.6',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'forme': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
