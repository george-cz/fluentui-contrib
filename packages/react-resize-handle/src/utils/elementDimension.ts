import { GrowDirection } from '../types';

/**
 * Returns the dimension (width or height) of the specified element based on the given grow dimension.
 * @param element - The HTML element to measure.
 * @param direction - The direction in which the element is considered growing in size ('end', 'start', 'up', or 'down').
 * @returns The dimension of the element.
 */

export function elementDimension(
  element: HTMLElement | null,
  direction: GrowDirection
): number {
  const key = direction === 'end' || direction === 'start' ? 'width' : 'height';
  return element?.getBoundingClientRect()[key] || 0;
}
