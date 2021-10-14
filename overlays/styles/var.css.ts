import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    black: '#000',
    white: '#fff',
    event: '#49c9e6',
    blue: '#49c9e6',
  },
  fontFamily: {
    body:
      '"Unica One", sans-serif',
  },
});