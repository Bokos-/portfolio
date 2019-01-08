import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

import { backgroundColor, primaryColor } from './colors'

Wordpress2016.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['300', '400', '700', '900'],
  },
  {
    name: 'Merriweather',
    styles: ['300', '400', '400i', '700', '700i', '900', '900i'],
  },
]

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: primaryColor,
  },
  'a:hover': {
    backgroundColor: primaryColor,
    color: backgroundColor,
  },
  'a.gatsby-resp-image-link:hover': {
    backgroundColor: 'inherit'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.anchor': {
    boxShadow: 'none',
  },
  'h1 a, h2 a': {
    color: 'black',
  },
  'h1 a:hover, h2 a:hover': {
    backgroundColor,
    color: primaryColor,
  },
  'p code': {
    fontSize: '1.1rem',
  },
  'li code': {
    fontSize: '1rem',
  },
})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
