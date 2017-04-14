import {
  em,
  rem
} from 'polished';
import { emSize } from '../base-sizes';
import {
  pixelsToEm,
  pixelsToRem
} from '../exact-pixel-values';

describe('pixelsToEm', () => {
  it('should convert pixels to em using the defined base size', () => {
    expect(pixelsToEm(24)).toBe(em(24, emSize));
    expect(pixelsToEm('24px')).toBe(em(24, emSize));
  });
});

describe('pixelsToRem', () => {
  it('should convert pixels to rem using the defined base size', () => {
    expect(pixelsToRem(24)).toBe(rem(24, emSize));
    expect(pixelsToRem('24px')).toBe(rem(24, emSize));
  });
});
