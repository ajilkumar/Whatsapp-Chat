import type { Config } from 'tailwindcss'

export default {
  theme: {
    fontFamily: {
      // This will make Poppins the default sans font
      // sans: [
      //   'Poppins',
      //   'ui-sans-serif',
      //   'system-ui',
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   'sans-serif'
      // ],
      // You can also add it as a separate font family
      poppins: ['Poppins', 'sans-serif'],
    },
    // You can extend font weights if needed
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  }
} satisfies Config