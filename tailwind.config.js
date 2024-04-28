/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import  withMT  from "@material-tailwind/react/utils/withMT";
export default withMT({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
    extend: {
      colors: {
        'primary-500': '#0866ff',
        'primary-hover':"#1877f2",
        'primary-600': '#0661f4',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-bg':"#242526",
        'dark-1': '#18191a',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#e4e6eb',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',

        'border-1':"#dadde1",
        'header-1':"#242526",
        'input':"#3a3b3c",

        'text':'#b0b3b8',
        'text-1':'#dadce1',
        'icon':'#e4e6eb'

      },
      screens: {
        'xs': '480px',
      
      },
      width: {
        '30':"30%",
        '35':"35%",
        '40':"40%",
        '45':"45%",
        '50':"50%",
        '55':"55%",
        '60':"60%",
        '65':"65%",
        '70':"70%",
        '75':"75%",
        '80':"80%",
        '85':"85%",
        '90':"90%",
        '95':"95%",
        '100':"100%",
        '420': '420px',
        '465': '465px',
        'content':'680px',
        'sidebar':'360px',
        'height-header':'60px',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
  ],
})

