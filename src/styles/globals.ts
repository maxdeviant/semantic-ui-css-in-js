import {
  darken,
  em,
  rem,
  saturate
} from 'polished';
import {
  colors,
  lightColors,
  neutralColors
} from './colors';

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

export const primaryColor = colors.blue;
export const secondaryColor = colors.black;

export const lightPrimaryColor = lightColors.blue;
export const lightSecondaryColor = lightColors.black;

// Page Heading

export const headerFontWeight = 'bold';
export const headerLineHeight = em(18 / 14);

export const h1 = rem(28 / 14);
export const h2 = rem(24 / 14);
export const h3 = rem(18 / 14);
export const h4 = rem(15 / 14);
export const h5 = rem(14 / 14);

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

// Highlighted Text

export const highlightBackground = '#cce2ff';
export const highlightColor = textColor;

export const inputHighlightBackground = 'rgba(100,100,100,.4)';
export const inputHightlightColor = textColor;

// Loader
// TODO: Loader

// Transitions

export const defaultDuration = '0.1s';
export const defaultEasing = 'ease';

// Em Sizes

const calculateSize = (size: number) => rem(Math.round(size * emSize) / emSize);

export const mini = calculateSize(sizes.mini);
export const tiny = calculateSize(sizes.tiny);
export const small = calculateSize(sizes.small);
export const medium = calculateSize(sizes.medium);
export const large = calculateSize(sizes.large);
export const big = calculateSize(sizes.big);
export const huge = calculateSize(sizes.huge);
export const massive = calculateSize(sizes.massive);

const calculateRelativeSize = (size: number) => em(Math.round(size * emSize) / emSize);

export const relativeMini = calculateRelativeSize(sizes.mini);
export const relativeTiny = calculateRelativeSize(sizes.tiny);
export const relativeSmall = calculateRelativeSize(sizes.small);
export const relativeMedium = calculateRelativeSize(sizes.medium);
export const relativeLarge = calculateRelativeSize(sizes.large);
export const relativeBig = calculateRelativeSize(sizes.big);
export const relativeHuge = calculateRelativeSize(sizes.huge);
export const relativeMassive = calculateRelativeSize(sizes.massive);

const calculateAbsoluteSize = (size: number) => rem(Math.round(size * emSize) / emSize);

export const absoluteMini = calculateAbsoluteSize(sizes.mini);
export const absoluteTiny = calculateAbsoluteSize(sizes.tiny);
export const absoluteSmall = calculateAbsoluteSize(sizes.small);
export const absoluteMedium = calculateAbsoluteSize(sizes.medium);
export const absoluteLarge = calculateAbsoluteSize(sizes.large);
export const absoluteBig = calculateAbsoluteSize(sizes.big);
export const absoluteHuge = calculateAbsoluteSize(sizes.huge);
export const absoluteMassive = calculateAbsoluteSize(sizes.massive);

// Icons

/**
 * Maximum glyph width for icons.
 */
export const iconWidth = '1.18em';

// Neutral Text

export const darkTextColor = 'rgba(0,0,0,.85)';
export const mutedTextColor = 'rgba(0,0,0,.6)';
export const lightTextColor = 'rgba(0,0,0,.4)';

export const unselectedTextColor = 'rgba(0,0,0,.4)';
export const hoveredTextColor = 'rgba(0,0,0,.8)';
export const pressedTextColor = 'rgba(0,0,0,.9)';
export const selectedTextColor = 'rgba(0,0,0,.95)';
export const disabledTextColor = 'rgba(0,0,0,.2)';

export const invertedTextColor = 'rgba(255,255,255,.9)';
export const invertedMutedTextColor = 'rgba(255,255,255,.8)';
export const invertedLightTextColor = 'rgba(255,255,255,.7)';
export const invertedUnselectedTextColor = 'rgba(255,255,255,.5)';
export const invertedHoveredTextColor = 'rgba(255,255,255,1)';
export const invertedPressedTextColor = 'rgba(255,255,255,1)';
export const invertedSelectedTextColor = 'rgba(255,255,255,1)';
export const invertedDisabledTextColor = 'rgba(255,255,255,.2)';

// Brand Colors

export const facebookColor = '#3b5998';
export const twitterColor = '#55acee';
export const googlePlusColor = '#dd4b39';
export const linkedInColor = '#1f88be';
export const youtubeColor = '#cc181e';
export const pinterestColor = '#bd081c';
export const vkColor = '#4d7198';
export const instagramColor = '#49769c';

// Borders

export const circularRadius = '500rem';

export const borderColor = 'rgba(34,36,38,.15)';
export const strongBorderColor = 'rgba(34,36,38,.22)';
export const internalBorderColor = 'rgba(34,36,38,.1)';
export const selectedBorderColor = 'rgba(34,36,38,.35)';
export const strongSelectedBorderColor = 'rgba(34,36,38,.5)';
export const disabledBorderColor = 'rgba(34,36,38,.5)';

export const solidInternalBorderColor = '#fafafa';
export const solidBorderColor = '#d4d4d5';
export const solidSelectedBorderColor = '#bcbdbd';

export const whiteBorderColor = 'rgba(255,255,255,.1)';
export const selectedWhiteBorderColor = 'rgba(255,255,255,.8)';

export const solidWhiteBorderColor = '#555555';
export const selectedSolidWhiteBorderColor = '#999999';

// Exact Pixel Values

export function pixelsToRem(pixels: number) {
  return rem(pixels, emSize);
}

export function pixelsToEm(pixels: number) {
  return em(pixels, emSize);
}
