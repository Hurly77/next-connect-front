module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
			0: '0',
			'1/4': '25vh',
			'1/2': '50vh',
			'3/4': '75vh',
			full: '100%',
      screen: '100vh'
		},
		screens: {
			xs: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
    extend: {
      spacing: {
				sm: '2.5rem',
				md: '6rem',
				lg: '11rem',
				xl: '16rem',
				'2xl': '24rem',
			},
    },
  },
  variants: {
    extend: {
      extend: {
      backgroundColor: ['active'],
      width: ['active'],
    }
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'cmyk']
  }
}
