/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  corePlugins: { preflight: false },
  content: ['./src/features8/**/*.{js,jsx}', './src/floaticons/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--f8-background)',
        foreground: 'var(--f8-foreground)',
        border: 'var(--f8-border)',
        card: {
          DEFAULT: 'var(--f8-card)',
          foreground: 'var(--f8-card-foreground)',
        },
        muted: {
          DEFAULT: 'var(--f8-muted)',
          foreground: 'var(--f8-muted-foreground)',
        },
        primary: {
          DEFAULT: 'var(--f8-primary)',
          foreground: 'var(--f8-primary-foreground)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--f8-border)',
      },
      borderRadius: {
        lg: 'var(--f8-radius)',
        md: 'calc(var(--f8-radius) - 4px)',
        sm: 'calc(var(--f8-radius) - 8px)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Geist"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
