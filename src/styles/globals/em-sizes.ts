import {
  em,
  rem
} from 'polished';
import { emSize } from './base-sizes';
import { sizes } from './sizes';

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
