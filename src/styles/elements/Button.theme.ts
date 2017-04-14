import { stripUnit } from 'polished';
import {
  borderColor,
  defaultBorderRadius,
  defaultDuration,
  defaultEasing,
  hoveredTextColor,
  inputVerticalPadding,
  pageFont,
  pixelsToEm,
  relativeTiny
} from '../globals';

// Button

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

// Box Shadow

export const borderBoxShadowColor = 'transparent';
export const borderBoxShadowWidth = '1px';
export const borderBoxShadow = `0px 0px 0px ${borderBoxShadowWidth} ${borderBoxShadowColor} inset`;
export const boxShadow = `${borderBoxShadow}, ${shadowBoxShadow}`;

// Icon

export const iconHeight = relativeTiny;
export const iconOpacity = 0.8;
export const iconDistance = pixelsToEm(6);
export const iconColor = '';
export const iconTransition = `opacity ${defaultDuration} ${defaultEasing}`;
export const iconVerticalAlign = '';

export const iconMargin = `0em ${iconDistance} 0em -${stripUnit(iconDistance) / 2}`;
export const rightIconMargin = `0em -${stripUnit(iconDistance) / 2} 0em ${iconDistance}`;

// Loader

export const invertedLoaderFillColor = 'rgba(0,0,0,.15)';

export const transition = `
  opacity ${defaultDuration} ${defaultEasing},
  background-color ${defaultDuration} ${defaultEasing},
  color ${defaultDuration} ${defaultEasing},
  box-shadow ${defaultDuration} ${defaultEasing},
  background ${defaultDuration} ${defaultEasing}
`;
export const willChange = '';

// Group

export const groupBoxShadow = 'none';
export const groupButtonBoxShadow = boxShadow;
export const verticalBoxShadow = 'none';
export const groupButtonOffset = '0px 0px 0px 0px';
export const verticalGroupOffset = '0px 0px 0px 0px';

//
// States
//

// Hovered

export const hoverBackgroundColor = '#cacbcd';
export const hoverBackgroundImage = backgroundImage;
export const hoverBoxShadow = boxShadow;
export const hoverColor = hoveredTextColor;
export const iconHoverOpacity = 0.85;

// Focused

export const focusBackgroundColor = hoverBackgroundColor;
export const focusBackgroundImage = '';
export const focusBoxShadow = '';
export const focusColor = hoveredTextColor;
export const iconFocusOpacity = 0.85;

// Disabled

export const disabledBackgroundImage = 'none';
export const disabledBoxShadow = 'none';
