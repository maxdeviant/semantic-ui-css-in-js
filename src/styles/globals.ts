import {
  darken,
  em,
  rem,
  saturate
} from 'polished';
import { neutralColors } from './colors';

// Fonts

export const fontName = 'Lato';
export const fontSmoothing = 'antialiased';

export const headerFont = `${fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`;
export const pageFont = `${fontName}, 'Helvetica Neue', Arial, Helvetica, sans-serif`;

export const googleFontName = fontName;
export const importGoogleFonts = true;
export const googleFontSizes = '400,700,400italic,700italic';
export const googleSubset = 'latin';

export const googleProtocol = 'https://';
export const googleFontRequest = `${googleFontName}:${googleFontSizes}&subset=${googleSubset}`;

// Base Sizes

export const emSize = 14;

/**
 * The size of page text.
 */
export const fontSize = 14;

// Border Radius

export const relativeBorderRadius = pixelsToEm(4);
export const absoluteBorderRadius = pixelsToRem(4);

export const defaultBorderRadius = absoluteBorderRadius;

// Brand Colors
// TODO: Brand Colors

// Page Heading
// TODO: Page Heading

// Form Input

export const inputBackground = neutralColors.white;
export const inputVerticalPadding = pixelsToEm(11);
export const inputHorizontalPadding = pixelsToEm(14);
export const inputPadding = `${inputVerticalPadding} ${inputHorizontalPadding}`;

// Line height defult for inputs in browser (descenders are 17px at 14px base em).
export const inputLineHeight = em(17 / 14);

// Focused Input

export const focusedFormBorderColor = '#85b7d9';

export const focusedFormMutedBorderColor = '#96c8da';

// Sizes

export const sizes = {
  mini: 11 / 14,
  tiny: 12 / 14,
  small: 13 / 14,
  medium: 14 / 14,
  large: 16 / 14,
  big: 18 / 14,
  huge: 20 / 14,
  massive: 24 / 14
};

// Page

export const pageBackground = '#ffffff';
export const pageOverflowX = 'hidden';

export const lineHeight = '1.4825em';
export const textColor = 'rgba(0,0,0,.87)';

// Paragraph

export const paragraphMargin = '0em 0em 1em';
export const paragraphLineHeight = lineHeight;

// Links

export const linkColor = '#4183c4';
export const linkUnderline = 'none';
export const linkHoverColor = darken(15, saturate(20, linkColor));
export const linkHoverUnderline = linkUnderline;

// Exact Pixel Values

export function pixelsToRem(pixels: number) {
  return rem(pixels / emSize);
}

export function pixelsToEm(pixels: number) {
  return em(pixels / emSize);
}
