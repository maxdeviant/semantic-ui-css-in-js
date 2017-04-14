import {
  em,
  rem
} from 'polished';
import { emSize } from './base-sizes';

export function pixelsToRem(pixels: string | number) {
  return rem(pixels, emSize);
}

export function pixelsToEm(pixels: string | number) {
  return em(pixels, emSize);
}
