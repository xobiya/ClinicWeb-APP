module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A7BC2',
        secondary: '#0FB9B1',
        accent: '#FCD34D',
        ink: '#1E293B',
        base: '#F8FAFC',
        card: '#FFFFFF'
      },
      fontFamily: {
        display: ['"Poppins"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'brand-lg': '0 30px 60px -32px rgba(10, 123, 194, 0.45)',
        card: '0 26px 60px -35px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
}
