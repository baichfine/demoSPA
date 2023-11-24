// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/scss/main.scss'
import MyIcons from '../customIcons/icons.js'

// Vuetify
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#f6f6f6',
    fontPrimory: '#515070',
    fontSecondary: '#a49a9a',
    main: '#ff8e6e',
    secondary: '#ffbb91',
    white: '#ffffff',
    whiteSecondary: '#f6f6f6',
    black: '#000000',
    backgroundSecondary: '#ffffff',
    gradient1: '#8988ab',
    gradient2: '#7c7ba1',
    gradient3: '#6f6e98',
    gradient4: '#65638c',
    gradient5: '#5b5a7f',
    gradient6: '#515070',
  },
}
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    fontPrimory: '#ffffff',
    fontSecondary: '#a49a9a',
    main: '#ff8e6e',
    secondary: '#ffbb91',
    white: '#000000',
    whiteSecondary: '#f6f6f6',
    black: '#ffffff',
    backgroundSecondary: '#212121',
    gradient1: '707070',
    gradient2: '616161',
    gradient3: '515151',
    gradient4: '414141',
    gradient5: '313131',
    gradient6: '212121',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
  icons: {
    aliases: MyIcons,
  },
})
