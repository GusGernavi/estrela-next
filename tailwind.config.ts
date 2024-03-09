import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FB83AD',
        secondary: '#D34368',
        light: '#B7B8B9',
        medium: '#818387',
        dark: '#18181A',
      },
    },
  },
  plugins: [],
}
export default config
