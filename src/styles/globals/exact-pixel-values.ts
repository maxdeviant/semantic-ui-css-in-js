import {
  em,
  rem
} from 'polished';
import { emSize } from './base-sizes';

export function pixelsToRem(pixels: number) {
  return rem(pixels, emSize);
}

export function pixelsToEm(pixels: number) {
  return em(pixels, emSize);
}
