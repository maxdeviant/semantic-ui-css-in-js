import {
  darken,
  saturate
} from 'polished';

export const linkColor = '#4183c4';
export const linkUnderline = 'none';
export const linkHoverColor = darken(15, saturate(20, linkColor));
export const linkHoverUnderline = linkUnderline;
