module.exports = {
  content: ["layouts/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      flex: {
        'l-24': '0 0 6rem'
      },
      fontFamily: {
        serif: ['Arvo'],
        mono: ['Source Code Pro']
      },
      padding: {
        '1/2': '0.125rem'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
