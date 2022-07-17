import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      codeBg: '#1a1a1a',
      gray50: '#F9F9FC',
      gray100: '#ECEFF8',
      gray200: '#D8DEEB',
      gray300: '#C3CDDD',
      gray400: '#A1AFC3',
      gray500: '#8192A8',
      gray600: '#61738B',
      gray700: '#43556C',
      gray800: '#283B52',
      gray900: '#0E233C',
      purple50: '#F8F6FF',
      purple100: '#EAEAFF',
      purple200: '#DDDDFF',
      purple300: '#BCBCFF',
      purple400: '#A2A2FF',
      purple500: '#8484FF',
      purple600: '#5D5DFF',
      purple700: '#4B3CF0',
      purple800: '#4028C8',
      purple900: '#30008C'
    },
    space: {
      0: '0rem',
      '05': '0.125rem',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem'
    },
    fonts: {
      sans: "Inter, 'Inter var', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
    },
    fontSizes: {
      100: '0.75rem',
      200: '0.875rem',
      300: '1rem',
      400: '1.125rem',
      500: '1.25rem',
      600: '1.5rem',
      700: '1.875rem',
      800: '2.25rem',
      900: '3rem',
      1000: '4rem'
    },
    radii: {
      none: '0px',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      circle: '50%',
      pill: '9999px'
    },
    shadows: {
      focus: '0 0 0 4px $colors$purple500',
      focusDark: '0 0 0 4px $colors$purple300'
    }
  },
  media: {
    sm: '(min-width: 448px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 960px)',
    xl: '(min-width: 1200px)'
  }
});
