import { darken } from 'polished';

export const colors = {
  red: '#db2828',
  orange: '#f2711c',
  yellow: '#fbbd08',
  olive: '#b5cc18',
  green: '#21ba45',
  teal: '#00b5ad',
  blue: '#2185d0',
  violet: '#6435c9',
  purple: '#a333c8',
  pink: '#e03997',
  brown: '#a5673f',
  grey: '#767676',
  black: '#1b1c1d'
};

export const lightColors = {
  red: '#ff695e',
  orange: '#ff851b',
  yellow: '#ffe21f',
  olive: '#d9e778',
  green: '#2ecc40',
  teal: '#6dffff',
  blue: '#54c8ff',
  violet: '#a291fb',
  purple: '#dc73ff',
  pink: '#ff8edf',
  brown: '#d67c1c',
  grey: '#dcddde',
  black: '#545454'
};

export const neutralColors = {
  fullBlack: '#000000',
  offWhite: '#f9fafb',
  darkWhite: '#f3f4f5',
  midWhite: '#dcddde',
  white: '#ffffff'
};

export const textColors = {
  ...colors,
  // Override the text colors that are difficult to read.
  yellow: '#b58105',
  olive: '#8abc1e',
  green: '#1ebc30',
  teal: '#10a3a3'
};

export const backgroundColors = {
  red: '#ffe8e6',
  orange: '#ffedde',
  yellow: '#fff8db',
  olive: '#fbfdef',
  green: '#e5f9e7',
  teal: '#e1f7f7',
  blue: '#dff0ff',
  violet: '#eae7ff',
  purple: '#f6e7ff',
  pink: '#ffe3fb',
  brown: '#f1e2d3'
};

const darkenBy5 = (color: string): string => darken(5, color);

export const headerColors = {
  red: darkenBy5(textColors.red),
  olive: darkenBy5(textColors.olive),
  green: darkenBy5(textColors.green),
  yellow: darkenBy5(textColors.yellow),
  blue: darkenBy5(textColors.blue),
  teal: darkenBy5(textColors.teal),
  pink: darkenBy5(textColors.pink),
  violet: darkenBy5(textColors.violet),
  purple: darkenBy5(textColors.purple),
  orange: darkenBy5(textColors.orange),
  brown: darkenBy5(textColors.brown)
};

export const borderColors = textColors;
