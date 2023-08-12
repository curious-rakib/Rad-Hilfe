import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#001F3F',
        maxHeight: '100vh',
        fontFamily: 'Inter',
        // borderRadius: 'md',
      },
    },
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    accent: '#C1FAA6', //neon green
    secondary: '#001F3F', //midnight blue
    primary: '#FFFFFF', //white
    third: '#EDCBEF', //lilac
    fourth: '#E3DD39', //yellow
    green: '#52D4A5',
    // ...
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',

    '2xl': '1rem',
  },
  colorScheme: {
    accent: '#C1FAA6', //neon green
    third: '#EDCBEF', // lilac
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
    },
    h2: {
      fontSize: ['32px', '48px'],
      fontWeight: 'bold',
    },
    h3: {
      fontSize: ['20px', '36px'],
      fontWeight: 'bold',
    },
    h6: {
      fontSize: ['8px', '10px'],
      fontWeight: 'bold',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});
export default theme;

// !not working

// export function deleteColorModeInLocalStorage() {
//   window.localStorage.removeItem('chakra-ui-color-mode');
// }
