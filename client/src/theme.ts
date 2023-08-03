import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#001F3F',
        maxHeight: '100vh',
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
    accent: '#C1FAA6',
    secondary: '#001F3F',
    primary: '#FFFFF',
    third: '#EDCBEF',
    fourth: '#E3DD39',
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
    accent: '#C1FAA6',
    third: '#EDCBEF',
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
