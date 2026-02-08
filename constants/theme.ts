/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#090909',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    secondaryText: '#888888',
    surface: '#111111',
  },
};

export const GabrielDesign = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    grey1: '#111111',
    grey2: '#222222',
    grey3: '#333333',
    accent: '#A1CEDC',
    textMuted: '#888888',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  }
};

export const Fonts = {
  regular: 'Inter, system-ui, sans-serif',
  mono: 'Space Mono, monospace',
  serif: 'Georgia, serif',
  sans: 'Outfit, sans-serif',
};
