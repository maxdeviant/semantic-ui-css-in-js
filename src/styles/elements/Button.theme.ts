import { stripUnit } from 'polished';

// Begin extract
const inputVerticalPadding = '';
const pageFont = '';
const defaultBorderRadius = '';
const borderColor = '';
// End extract

export const verticalMargin = '0em';
export const horizontalMargin = '0.25em';
export const backgroundColor = '#e0e1e2';
export const backgroundImage = 'none';
export const background = `${backgroundColor} ${backgroundImage}`;
export const lineHeight = '1em';

export const verticalPadding = inputVerticalPadding;
export const horizontalPadding = '1.5em';

// Text
export const textTransform = 'none';
export const tapColor = 'transparent';
export const fontFamily = pageFont;
export const fontWeight = 'bold';
export const textColor = 'rgba(0,0,0,.6)';
export const textShadow = 'none';
export const invertedTextShadow = textShadow;
export const borderRadius = defaultBorderRadius;
export const verticalAlign = 'baseline';

// Internal Shadow
export const shadowDistance = '0em';
export const shadowOffset = `${stripUnit(shadowDistance) / 2}em`;
export const shadowBoxShadow = `0px -${shadowDistance} 0px 0px ${borderColor} inset`;
