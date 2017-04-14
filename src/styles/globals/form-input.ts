import { em } from 'polished';
import { neutralColors } from './colors';
import {
  pixelsToEm
} from './exact-pixel-values';

export const inputBackground = neutralColors.white;
export const inputVerticalPadding = pixelsToEm(11);
export const inputHorizontalPadding = pixelsToEm(14);
export const inputPadding = `${inputVerticalPadding} ${inputHorizontalPadding}`;

// Line height defult for inputs in browser (descenders are 17px at 14px base em).
export const inputLineHeight = em(17 / 14);
